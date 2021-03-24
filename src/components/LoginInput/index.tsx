import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
  ForwardRefRenderFunction,
} from 'react'
import { useField } from '@unform/core'

import { moderateScale } from 'react-native-size-matters'
import { Container, TextInput, Icon } from './styles'



import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  name: string
  icon?: string

}

export interface InputValueRef {
  value: string
}

export interface InputRef {
  focus(): void
}

export interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}


const LoginInput: ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon,  ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null)

  const { registerField, defaultValue, fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueRef>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsField(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      },
    })
  }, [fieldName, registerField])
  return (
    <Container isFocused={isFocused} isErrored={!!error}>

      {/*<Icon
        name={icon}
        size={moderateScale(14)}
        color={isFocused || isField ? 'red' : 'blue'}
      />*/}
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputElementRef}
        keyboardAppearance="light"
        placeholderTextColor={'#fff'}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export const InputLogin = forwardRef(LoginInput)
