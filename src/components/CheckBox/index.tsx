import React, { useRef, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useField } from '@unform/core';
import RNCheckbox, {
  CheckBoxProps as RNCheckboxProps,
} from '@react-native-community/checkbox';

export interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxProps extends RNCheckboxProps {
  name: string;
  options: CheckboxOption[];
}

interface InputRefProps extends RNCheckbox {
  value: string;
  checked: boolean;
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 200,
  },
});

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  options,
  onValueChange,
  ...rest
}) => {
  const inputRefs = useRef<InputRefProps[]>([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  const [checkedValues, setCheckedValues] = useState<string[]>(defaultValue);

  useEffect(() => {
    inputRefs.current.forEach((ref, index) => {
      ref.value = options[index].value;
      ref.checked = checkedValues.includes(options[index].value);
    });
  }, [checkedValues, options]);

  const handleToggleOption = useCallback(
    (isChecked: boolean, optionValue: string) => {
      setCheckedValues(state => {
        if (isChecked) {
          return [...state, optionValue];
        }

        return state.filter(value => value !== optionValue);
      });
    },
    [],
  );

  useEffect(() => {
    registerField<string[]>({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: InputRefProps[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      setValue: (_, values: string[]) => setCheckedValues(values),
      clearValue: () => setCheckedValues([]),
    });
  }, [fieldName, registerField]);

  return (
    <>
      {options.map((option, index) => (
        <View key={option.value} style={[styles.checkboxContainer]}>
          <RNCheckbox
            value={checkedValues.includes(option.value)}
            tintColors={{true: '#825BC9'}}
            onCheckColor='#825BC9'
            onTintColor='#825BC9'
            onValueChange={(isChecked: boolean) => {
              handleToggleOption(isChecked, option.value);
              onValueChange && onValueChange(isChecked);
            }}
            ref={(ref: InputRefProps) => {
              ref && (inputRefs.current[index] = ref);
            }}
            {...rest}
          />
          <Text style={{marginLeft: 12, fontFamily: 'Roboto-Medium', fontSize: 14, color: '#666360'}}>{option.label}</Text>
        </View>
      ))}
    </>
  );
};

export default Checkbox;
