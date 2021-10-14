import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const irSobre = () => {
    navigation.navigate('Sobre', {
      nome: 'Cleison Teste',
      email: 'teste@teste.com',
    });
  };

  return (
    <View>
      <Text>Home</Text>
      <Text>Bem vindo a tela</Text>
      <Button title="Ir para sobre" onPress={irSobre} />
    </View>
  );
}

const styles = StyleSheet.create({});
