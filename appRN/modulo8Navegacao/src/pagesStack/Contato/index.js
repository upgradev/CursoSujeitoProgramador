import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';


export default function Contato() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Contato</Text>
      <Button title="Voltar Tela" onPress={() => navigation.goBack()} />
      <Button title="Voltar Para Home" onPress={() => navigation.dispatch(StackActions.popToTop())} />
    </View>
  );
}

const styles = StyleSheet.create({});
