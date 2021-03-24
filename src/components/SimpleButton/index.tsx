import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';


export interface ButtonProps extends RectButtonProperties {
  children: string;
  secondary?: boolean;

}
const SimpleButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
 return (
  <Container {...rest}>
        <ButtonText>{children}</ButtonText>
  </Container>
 )
};

export default SimpleButton;
