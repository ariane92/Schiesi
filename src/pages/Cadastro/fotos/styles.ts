import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')

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
  margin-top: ${(height / 10) * 1}px;
  margin-bottom: 64px;
`

export const Content = styled.View`
  padding: 0 30px;
  align-items: center;

`
