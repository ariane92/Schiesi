import styled from 'styled-components/native';
import colors from '../../styles/colors'
export const Container = styled.TouchableOpacity`
  max-width: 100%;
  min-width:100%;
  height: 50px;
  margin-top: 8px;
  border-width: 2px;
  border-color: ${colors.grey};
  border-radius: 30px;
  justify-content: center;

`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.grey};
  font-family: 'Roboto-Medium';
  text-align: center;

`;
