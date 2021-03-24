import styled from 'styled-components/native';
import {scale, moderateScale} from 'react-native-size-matters'
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${moderateScale(30)}px;


`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 32px;
  margin-top: 30px;

`

export const Slogan = styled.Text`
  flex:1;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-align: left;

`
export const Description = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 200px;

`

export const BoxButtons = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
`
export const LoginButton = styled.TouchableOpacity`
  width: ${moderateScale(100)}%;
  height: ${moderateScale(60)}px;
  padding: 0 16px;
  border-radius: 30px;
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${moderateScale(16)}px;
  border-width: 0.5px;
  border-color: #fff;
`;

export const TextButtonLogin = styled.Text`
  font-size: ${scale(16)}px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;
export const ProblemsLogin = styled.TouchableOpacity`
  margin-top: 66px;
`;
export const TextProblemsLogin = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`
