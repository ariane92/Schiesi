import styled from 'styled-components/native';
import {scale, moderateScale} from 'react-native-size-matters'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('screen')

export const Container = styled.View`
  padding: 0 10px;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 26px;
  color: #fff;
  text-align: center;
  margin-top:  ${(height / 10) * 0.7}px;
  margin-bottom: ${(height / 10) * 0.7}px;
  padding: 0 40px;

`

export const SocialButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  height: ${moderateScale(50)}px;
  width: ${moderateScale(320)}px;
  margin-bottom: 6px;
  margin-top: 6px;
  elevation: 2;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.54);

`
export const  TextButton = styled.Text`
  font-size: ${moderateScale(14)}px;
  font-weight: bold;
  color: #fff;
`


export const BoxButton = styled.View`
  margin-top: ${moderateScale(12)}px;
  margin-bottom: ${moderateScale(12)}px;
  justify-content: space-between;
  flex-direction: row;
`

export const ProblemsLogin = styled.TouchableOpacity`
  margin-top: ${scale(18)}px;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
`;
export const TextProblemsLogin = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;




`
