import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import {Container, Titulo, Nome, BotaoSujeito, BotaoText} from './src/styles';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function App() {
  return (
    // <Container tamanho={getStatusBarHeight()}>
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Titulo cor="#ff0000" tamanho="25">
        App Programador
      </Titulo>
      <Nome>Ola Cleison</Nome>

      <BotaoSujeito onPress={() => alert('clicou')}>
        <BotaoText>Entrar</BotaoText>
      </BotaoSujeito>
    </Container>
  );
}
