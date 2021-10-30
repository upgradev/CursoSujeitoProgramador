import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  /* justify-content: center;*/
  align-items: center; 
  background-color: #ddd;
  padding-top:  ${0 + getStatusBarHeight()}px;
`;

export const Titulo = styled.Text`
  color: ${props => props.cor};
  font-size: ${props => props.tamanho}px;
`;

export const Nome = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const BotaoSujeito = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const BotaoText = styled.Text`
  color: #000;
  font-size: 20px;
`;
