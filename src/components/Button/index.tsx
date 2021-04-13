import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { scale, moderateScale } from 'react-native-size-matters';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon?: string;
}
const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => (
  <Container {...rest}>
    <LinearGradient
      colors={['#825BC9', '#B75FBD']}
      style={{
        width: moderateScale(300), height: moderateScale(60), borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginLeft: 30, marginRight: 30,
      }}
    >
      <ButtonText>{children}</ButtonText>
    </LinearGradient>
  </Container>
);

export default Button;
