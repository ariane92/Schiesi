import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { OptionsProps } from './index'



export const Option = styled(TouchableOpacity)<OptionsProps>`
  border-color: ${(props) => (props.selected ? '#825BC9' : '#cecece')};
  max-width: 100%;
  min-width:100%;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border-width: 3px;

  border-radius: 30px;
  margin-bottom: 12px;
`

export const OptionTitle = styled.Text<OptionsProps>`
  font-size: 20px;
  color: #cecece;
  font-family: 'Roboto-Medium';
  text-align: center;
`

