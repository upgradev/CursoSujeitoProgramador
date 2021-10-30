import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from '../../services/firebaseConnection';

console.disableYellowBox = true;

export default function Login({changeStatus}) {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (type === 'login') {
      //aqui o login
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          changeStatus(user.user.uid);
        })
        .catch(error => {
          console.log('error login: ', error);
          return;
        });
    } else {
      //cadastramos o usuario
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          changeStatus(user.user.uid);
        })
        .catch(error => {
          console.log('error cadastrar: ', error);
          return;
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Seu Email"
        style={styles.input}
        value={email}
        onChangeText={email => setEmail(email)}
      />

      <TextInput
        placeholder="*****"
        style={styles.input}
        value={password}
        onChangeText={password => setPassword(password)}
      />

      <TouchableOpacity
        style={[
          styles.handleLogin,
          {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'},
        ]}
        onPress={handleLogin}>
        <Text style={styles.loginText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setType(type => (type === 'login' ? 'cadastrar' : 'login'))
        }>
        <Text style={{textAlign: 'center'}}>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f2f6fc',
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414',
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
  },
});
