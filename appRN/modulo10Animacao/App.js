import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.shake();
  };

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="shake"
        // duration={5000}
        // iterationCount={Infinity} //rodar a animacao com o tempo ou infinito
      >
        Aquiiii
      </Animatable.Text>

      <ButtonAnimated
        style={styles.button}
        animation="pulse"
        ref={buttonRef}
        onPress={handleClick}>
        <Text style={{color: '#fff'}}>Animar</Text>
      </ButtonAnimated>
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
  button: {
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
