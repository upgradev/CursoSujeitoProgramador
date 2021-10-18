import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{props.data.nome}</Text>
      <Text style={styles.textoPessoa}>{props.data.idade} anos</Text>
      <Text style={styles.textoPessoa}>{props.data.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#123123',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center',
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20,
  },
});
