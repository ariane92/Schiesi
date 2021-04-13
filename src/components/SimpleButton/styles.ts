import styled from 'styled-components/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale, scale } from 'react-native-size-matters'
import {ButtonProps} from './index'
import colors from '../../styles/colors'
export const Container = styled(RectButton)<ButtonProps>`
  width: ${moderateScale(100)}%;
  height: ${moderateScale(60)}px;
  padding: 0 16px;
  border-radius: 30px;
  background-color: ${(props) => (props.secondary ? colors.white : 'transparent')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${moderateScale(16)}px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${scale(16)}px;
  color: ${colors.black};
  font-family: 'Roboto-Medium';

`;
