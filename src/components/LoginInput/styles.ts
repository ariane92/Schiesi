import styled, { css } from 'styled-components/native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { moderateScale } from 'react-native-size-matters'
import { ContainerProps } from './index'
import colors from '../../styles/colors'

export const Container = styled.View<ContainerProps>`
  width: ${moderateScale(294)}px;
  height: ${moderateScale(44)}px;
  padding: 0 16px;
  margin-top: 0px;
  margin-bottom: ${moderateScale(4)}px;
  border-width: ${moderateScale(2)}px;
  border-color: rgba(196, 196, 196, 0.2);
  background-color: rgba(0, 0, 0, 0.54);

  border-radius: ${moderateScale(10)}px;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.error};
    `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: ${moderateScale(15)}px;
  color: #fff;

  ${(props) => props.isFocused && css``}
`
{/*export const Icon = styled(FontAwesome5Icon)`
  margin-right: ${moderateScale(12)}px;
  `*/}
