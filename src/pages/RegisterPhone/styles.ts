import styled from 'styled-components/native';
import {Form} from '@unform/mobile'
import { scale, moderateScale } from 'react-native-size-matters'

export const Container = styled.View`
  padding: 0 10px;
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
  margin-top: ${moderateScale(12)}px;
  margin-bottom: ${moderateScale(12)}px;
  justify-content: space-between;
  flex-direction: row;
`
