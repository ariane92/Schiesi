import React, { useState } from 'react'
import { View } from 'react-native'


import {  Option, OptionTitle } from './styles'
import { TouchableOpacityProps } from 'react-native'

export interface OptionsProps extends TouchableOpacityProps {
  children: string
  selected?: boolean
}

export const SelectItem: React.FC<OptionsProps> = ({ children, ...rest }) => {
  return (
    <Option activeOpacity={0.7} {...rest}>
      <OptionTitle>{children}</OptionTitle>
    </Option>
  )
}

export default SelectItem
