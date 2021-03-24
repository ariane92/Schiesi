import styled from 'styled-components/native';
import {Form} from '@unform/mobile'
import { scale, moderateScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
export const Container = styled.View`
  padding: 0 10px;
  flex: 1;
  justify-content: flex-end;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 ${scale(30)}px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: ${scale(26)}px;
  color: #000;
  text-align: center;
  margin-bottom: ${scale(16)}px;
  margin-top: ${scale(16)}px;
  padding: 0 ${scale(30)}px;
`
export const BoxButton = styled.View`
  margin-top: ${scale(12)}px;
  justify-content: space-between;
  flex-direction: row;
`

export const Box = styled(Form)`
  margin-top: ${scale(18)}px;
  align-items: center;
  justify-content: center;
`

