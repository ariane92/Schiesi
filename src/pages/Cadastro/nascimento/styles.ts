import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
import { Form } from '@unform/mobile'
export const Container = styled.View`
padding: 0 10px;

`;


export const BoxButtons = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: space-between;
  flex-direction: row;
`
export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 26px;
  color: #1B364F;
  text-align: center;
  margin-top: ${(height / 10) * 2.5}px;
  margin-bottom: 64px;


`

export const Content = styled(Form)`
  padding: 0 30px;
  align-items: center;

`

export const Alert = styled.Text`
  color: #ff6961;
  font-size: 14px;
  font-family: 'Roboto-Medium';
  text-align: left;

`
