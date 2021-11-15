import React, {useState, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from './styles';

import {AuthContext} from '../../contexts/auth';

import * as Animatable from 'react-native-animatable';

const TitleAnimated = Animatable.createAnimatableComponent(Title);

export default function Login() {
  const {signUp, signIn, loadingAuth} = useContext(AuthContext);
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleLogin = () => {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      console.log('preencha os campos');
      return;
    }
    signIn(email, password);
  };

  const handleSignUp = () => {
    if (name == '' || email === '' || password === '') {
      console.log('preencha os campos');
      return;
    }
    // cadastrando
    signUp(email, password, name);
  };

  if (login) {
    return (
      <Container>
        <TitleAnimated animation="flipInY">
          Dev <Text style={{color: '#e52246'}}>Post</Text>
        </TitleAnimated>

        <Input
          placeholder="email@email.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Input
          placeholder="****"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <ButtonText>Acessar</ButtonText>
          )}
        </Button>

        <SignUpButton onPress={() => toggleLogin()}>
          <SignUpText>Criar Uma Conta</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <TitleAnimated animation="flipInY">
        Dev <Text style={{color: '#e52246'}}>Post</Text>
      </TitleAnimated>

      <Input
        placeholder="Nome"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Input
        placeholder="email@email.com"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Input
        placeholder="****"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <ButtonText>Cadastrar</ButtonText>
        )}
      </Button>

      <SignUpButton onPress={() => toggleLogin()}>
        <SignUpText>Já Tenho Uma Conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
