import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [valor, setValor] = useState(50);

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={valor}
        onValueChange={valorSelecionado => setValor(valorSelecionado)}
        minimumTrackTintColor="#000fff" //cor linha acima
        maximumTrackTintColor="#ff0000" //cor da linha abaixo
        thumbTintColor="#ff0000" //cor da bolinha
      />
      <Text style={{textAlign: 'center', fontSize: 25}}>
        Você tem: {valor.toFixed(0)} Kg
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
