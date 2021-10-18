import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.titutlo}>Seja bem vindo!</Text>
        <Button title="fecha" onPress={props.fechar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#292929',
    width: '100%',
    height: 350,
    borderRadius: 5,
  },
  titutlo: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
});
