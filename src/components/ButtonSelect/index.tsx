import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon?: string;
}
const ButtonSelect: React.FC<ButtonProps> = ({ children, icon, ...rest }) => {
 return (
  <Container {...rest}>
      <ButtonText>{children}</ButtonText>
  </Container>
 )
};

export default ButtonSelect;
