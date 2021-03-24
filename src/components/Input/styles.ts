import styled, { css } from 'styled-components/native';


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

  border-color: #666360;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #825BC9;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #666360;
  font-size: 18px;
  font-family: 'Roboto-Medium';
`;


