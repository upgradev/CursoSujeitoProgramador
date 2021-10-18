import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Modal} from 'react-native';
import Detalhes from './src/Detalhes';

export default function App() {
  const [modalVisibel, setModalVisibel] = useState(false);

  const abrirModal = () => {
    setModalVisibel(true);
  };

  const sairModal = () => {
    setModalVisibel(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Acessar" onPress={abrirModal} />

      <Modal transparent={true} animationType="slide" visible={modalVisibel}>
        {/* <View style={{flex: 1, backgroundColor: '#121212'}}> */}
        {/* <View style={{flex: 1, backgroundColor: '#121212'}}>
          <Text>Seja bem vindo!</Text>
          <Button title="fecha" onPress={() => setModalVisibel(false)} />
        </View> */}
        <Detalhes fechar={sairModal} />
      </Modal>
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
