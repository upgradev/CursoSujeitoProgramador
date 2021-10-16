import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text style={styles.title} 
      animation="bounce"
      // iterationCount={Infinity} //rodar a animacao com o tempo ou infinito
      
      >Aquiiii</Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
});
