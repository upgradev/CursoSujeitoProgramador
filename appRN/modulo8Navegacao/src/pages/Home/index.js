import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button title="Contato" onPress={() => navigation.navigate('Contato')} />
      <Button title="Abrir menu" onPress={() => navigation.toggleDrawer()}  />
      {/* <Ionicons name="ios-call" color={"#ff0000"} size={30} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
