import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import * as ImagePicker from "react-native-image-picker"


export default function App() {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [open, setOpen] = useState(false);
  const [capturePhoto, setCapturePhoto] = useState(null);

  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);

    setCapturePhoto(data.uri);
    setOpen(true);
    console.log('foto camera: ' + data.uri);

    //chama função salvar foto no album
    savePicture(data.uri);
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const savePicture = async data => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    CameraRoll.save(data, 'photo')
      .then(res => {
        console.log('salvo com sucesso: ', res);
      })
      .catch(err => {
        console.log('erro ao salvar: ', err);
      });
  };

  const toggleCam = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  function openAlbum () {
    const options = {
      title: 'Seleciona uma foto',
      chooseFromLibraryButtonTitle: 'Buscar foto do album',
      noData: true,
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('image picker cancelado');
      } else if (response.error) {
        console.log('gerou erro: ', response.error);
      } else {
        console.log(response.assets[0].uri);
        setCapturePhoto(response.assets[0].uri);
        setOpen(true);
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <RNCamera
        style={styles.preview}
        type={type}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a camera',
          message: 'Nós precisamos usar a camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}>
        {({camera, status, recordAndroidPermissionStatus}) => {
          if (status !== 'READY') return <View />;
          return (
            <View
              style={{
                marginBottom: 35,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text>Tirar Foto</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={openAlbum} style={styles.capture}>
                <Text>Álbum</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>

      <View style={styles.camPosition}>
        <TouchableOpacity onPress={toggleCam}>
          <Text>Trocar</Text>
        </TouchableOpacity>
      </View>

      {capturePhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
            }}>
            <TouchableOpacity
              style={{margin: 10}}
              onPress={() => setOpen(false)}>
              <Text style={{fontSize: 24}}>Fechar</Text>
            </TouchableOpacity>
            <Image
              style={{width: 350, height: 450, borderRadius: 15}}
              source={{uri: capturePhoto}}
              resizeMode="contain"
            />
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  camPosition: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    height: 40,
    position: 'absolute',
    right: 25,
    top: 60,
  },
});
