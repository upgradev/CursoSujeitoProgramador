import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import api from './src/service/api';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      console.log(response.data);
    };
    loadFilmes();
  }, []);

  return (
    <View>
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
