import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')


export const Container = styled.View`
padding:  0 10px;
padding-right: 20px;

`;


export const BoxButtons = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`
export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #cecece;

`

export const Alert = styled.Text`
  color: #ff6961;
  font-size: 14px;
  font-family: 'Roboto-Medium';
  text-align: left;
  margin-top: -58px;
  margin-bottom: 48px;

`
export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 26px;
  color: #1B364F;
  text-align: center;
  margin-top: ${(height / 10) * 0.8}px;
  margin-bottom: 68px;


`

export const Content = styled.View`
  padding: 0 30px;
  align-items: center;

`
