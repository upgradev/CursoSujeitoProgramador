import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {key: 1, nome: 'Golf 1.6', valor: 62.2},
    {key: 2, nome: 'Saveiro', valor: 29.3},
    {key: 3, nome: 'Gol', valor: 25.5},
    {key: 4, nome: 'BMW', valor: 129.75},
  ]);

  let carrosItem = carros.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.nome} />;
  });

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={carroSelecionado}
        onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)} //quando selecionar troca valor
      >
        {carrosItem}
        {/* <Picker.Item key={0} value={0} label="Golf 1.6" />
        <Picker.Item key={1} value={1} label="Saveiro" />
        <Picker.Item key={2} value={2} label="gol 1.0" /> */}
      </Picker>
      <Text style={styles.carros}> Carro: {carros[carroSelecionado].nome}</Text>
      <Text style={styles.carros}> Valor: {carros[carroSelecionado].valor.toFixed(3)}</Text>
      {/* <Text style={styles.carros}> {carroSelecionado} </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  carros: {
    marginTop: 15,
    fontSize: 25,
  },
});
