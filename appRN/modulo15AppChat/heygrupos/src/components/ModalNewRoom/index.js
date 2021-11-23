import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function ModalNewRoom({setVisible, setUpdateScreen}) {
  const [roomName, setRoomName] = useState('');

  const user = auth().currentUser.toJSON();

  const handleButtonCreate = () => {
    if (roomName === '') {
      return;
    }

    // deixar apenas cada usuario criar 4 grupos
    firestore()
      .collection('MESSAGE_THREADS')
      .get()
      .then(snapshot => {
        let myThreads = 0;
        snapshot.docs.map(docItem => {
          if (docItem.data().owner === user.uid) {
            myThreads += 1;
          }
        });

        if (myThreads >= 4) {
          alert('Você ja atingiu o limite de grupos por usuário');
        } else {
          createRoom();
        }
      });
  };

  //criar nova sala
  const createRoom = () => {
    firestore()
      .collection('MESSAGE_THREADS')
      .add({
        name: roomName,
        owner: user.uid,
        lastMessage: {
          text: `Grupo ${roomName} criado. Bem Vindo(a)!`,
          createdAt: firestore.FieldValue.serverTimestamp(),
        },
      })
      .then(docRef => {
        docRef
          .collection('MESSAGES')
          .add({
            text: `Grupo ${roomName} criado. Bem Vindo(a)!`,
            createdAt: firestore.FieldValue.serverTimestamp(),
            system: true,
          })
          .then(() => {
            setVisible();
            setUpdateScreen();
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={styles.modal}></View>
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>
        <Text style={styles.title}>Criar novo grupo</Text>
        <TextInput
          value={roomName}
          onChangeText={text => setRoomName(text)}
          placeholder="Nome para sua sala"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={handleButtonCreate}>
          <Text style={styles.buttonText}>Criar Sala</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={setVisible}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(34,34,34, 0.4)',
  },
  modal: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 14,
  },
  input: {
    borderRadius: 4,
    height: 45,
    backgroundColor: '#ddd',
    marginVertical: 15,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  buttonCreate: {
    borderRadius: 4,
    backgroundColor: '#2e54d4',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
