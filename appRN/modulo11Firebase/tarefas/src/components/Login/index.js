import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login() {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
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
