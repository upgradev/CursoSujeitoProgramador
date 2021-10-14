import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Switch, Button} from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [renderizado, setRenderizado] = useState(true)

  useEffect(() => {
    console.log("Montou");
    // setTimeout(() => {
    //   setContador(350)
    // }, 2000);
  }, [contador]); ///[] quando montar ele carrega o q esta na função, chama uma unica vez,
  //e setiver preenchido chama a função conforme o state sofrer alteração

  return (
    <View style={styles.container}>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
      <Text style={{fontSize: 30}}> {contador} </Text>
      <Button title="Diminuir" onPress={() => setContador(contador - 1)} />

      <Button title="Mostrar Nome" onPress={() => setRenderizado(false)} />

      {renderizado && <Nome />  }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


function Nome(){

  useEffect(() => {
    console.log("Componente nome montado");

    return () => console.log("Componente desmonstado");

  }, [])

  return <Text>Teste...</Text>
}