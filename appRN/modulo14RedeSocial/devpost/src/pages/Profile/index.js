import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/auth';
import {View, Text, Modal, Platform} from 'react-native';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'react-native-image-picker';

import {
  Container,
  UploadButton,
  UploadText,
  Avatar,
  Name,
  Email,
  Button,
  ButtonText,
  ModalContainer,
  ButtonBack,
  Input,
} from './styles';

export default function Profile() {
  const {signOut, user, storageUser, setUser} = useContext(AuthContext);

  const [url, setUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState(user?.nome);

  useEffect(() => {
    const load = async () => {
      try {
        let response = await storage()
          .ref('users')
          .child(user?.uid)
          .getDownloadURL();
        setUrl(response);
      } catch (error) {
        console.log(error);
      }
    };

    load();
  }, []);

  // atualizar perfil
  const updateProfile = async () => {
    if (nome === '') {
      return;
    }

    await firestore().collection('users').doc(user.uid).update({
      nome: nome,
    });

    // buscar todos post do usuario
    const postDocs = await firestore()
      .collection('posts')
      .where('userId', '==', user.uid)
      .get();

    // percorrer e atualizar os nomes do autor do post
    postDocs.forEach(async doc => {
      await firestore().collection('posts').doc(doc.id).update({
        autor: nome,
      });
    });

    let data = {
      uid: user.uid,
      nome: nome,
      email: user.email,
    };
    setUser(data);
    storageUser(data);
    setOpen(false);
  };

  const uploadFile = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('cancelou o modal');
      } else if (response.error) {
        console.log('erro: ', response.error);
      } else {
        uploadFileFirebase(response).then(() => {
          uploadAvatarPosts();
        });
        setUrl(response.assets[0].uri);
      }
    });
  };

  const getFileLocalePath = response => {
    const {path, uri} = response.assets[0];
    return Platform.OS === 'android' ? uri : path;
  };

  const uploadFileFirebase = async response => {
    const fileSource = getFileLocalePath(response);
    const storageRef = storage().ref('users').child(user?.uid);
    return await storageRef.putFile(fileSource);
  };

  const uploadAvatarPosts = async () => {
    const storageRef = storage().ref('users').child(user?.uid);
    const url = await storageRef
      .getDownloadURL()
      .then(async image => {
        //atualizar todos avatar url posts
        const postDocs = await firestore()
          .collection('posts')
          .where('userId', '==', user.uid)
          .get();

        postDocs.forEach(async doc => {
          await firestore().collection('posts').doc(doc.id).update({
            avatarUrl: image,
          });
        });
      })
      .catch(error => {
        console.log('error: ', error);
      });
  };

  return (
    <Container>
      <Header />

      {url ? (
        <UploadButton onPress={uploadFile}>
          <UploadText>+</UploadText>
          <Avatar source={{uri: url}} />
        </UploadButton>
      ) : (
        <UploadButton onPress={uploadFile}>
          <UploadText>+</UploadText>
        </UploadButton>
      )}

      <Name numberOfLines={1}> {user.nome} </Name>
      <Email numberOfLines={1}> {user.email} </Email>
      <Button bg="#428cfd" onPress={() => setOpen(true)}>
        <ButtonText color="#fff">Atualizar Perfil</ButtonText>
      </Button>

      <Button bg="#f1f1f1" onPress={() => signOut()}>
        <ButtonText color="#3b3b3b">Sair</ButtonText>
      </Button>

      <Modal visible={open} animationType={'slide'} transparent={true}>
        <ModalContainer behavior={Platform.OS=== "android"? "" : "padding"}>
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather name="arrow-left" color="#121212" size={22} />
            <ButtonText color="#121212">Voltar</ButtonText>
          </ButtonBack>

          <Input
            placeholder={user?.nome}
            value={nome}
            onChangeText={text => setNome(text)}
          />

          <Button bg="#428cfd" onPress={updateProfile}>
            <ButtonText color="#f1f1f1">Atualizar</ButtonText>
          </Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
