import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function FabButton({setVisible, userStatus}) {
  const navigation = useNavigation();

  const handleNavigateButton = () => {
    userStatus ? setVisible() : navigation.navigate('SignIn');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleNavigateButton}
      style={styles.containerButton}>
      <View>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: '#2e54d4',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    right: '6%',
  },
  text: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});
