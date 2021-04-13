import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors'

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  margin-bottom: 8px;
  border-bottom-width: 2px;

  border-color: ${colors.borderGrey};
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #825BC9;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.borderGrey};
  font-size: 18px;
  font-family: 'Roboto-Medium';
`;


