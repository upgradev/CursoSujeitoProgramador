import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Pessoa from './src/Pessoa';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Cleison',
      idade: 34,
      email: 'teste@teste.com',
    },
    {
      id: '2',
      nome: 'Claudia',
      idade: 35,
      email: 'claudia@teste2.com',
    },
    {
      id: '3',
      nome: 'Regina',
      idade: 40,
      email: 'regina@teste.com',
    },
    {
      id: '4',
      nome: 'Ana',
      idade: 25,
      email: 'ana@teste.com',
    },
    {
      id: '5',
      nome: 'José',
      idade: 21,
      email: 'jose@teste.com',
    },
    {
      id: '6',
      nome: 'Sujeito programador',
      idade: 96,
      email: 'sujeito@teste.com',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed} //os dados da lista
        renderItem={({item}) => <Pessoa data={item} />} //passar para renderizar como queira
        showsVerticalScrollIndicator={false} //desabilita barra de rolagem
        //keyExtractor={item => item._id} //mostrar se precisar qual o id da lista, se for diferente do id comum
      />

      {/* scroolView para pequenas listagem  */}
      {/* <ScrollView
        //showsVerticalScrollIndicator={false} //não aparecer a barra de rolagem
        // horizontal={true} //scrool na horizontal
        // showsHorizontalScrollIndicator={false}
      >
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box2}></View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // areaPessoa: {
  //   backgroundColor: 'red',
  //   height: 200,
  //   marginBottom: 15,
  //   justifyContent: 'center',
  // },
  // textoPessoa: {
  //   color: '#fff',
  //   fontSize: 20,
  // },
  // box1: {
  //   // width: 150,
  //   height: 250,
  //   backgroundColor: 'red',
  // },
  // box2: {
  //   // width: 150,
  //   height: 250,
  //   backgroundColor: 'green',
  // },
  // box3: {
  //   // width: 150,
  //   height: 250,
  //   backgroundColor: 'yellow',
  // },
  // box4: {
  //   // width: 150,
  //   height: 250,
  //   backgroundColor: 'blue',
  // },
});

// function Pessoa(props) {
//   return (
//     <View style={styles.areaPessoa}>
//       <Text style={styles.textoPessoa}>{props.data.nome}</Text>
//       <Text style={styles.textoPessoa}>{props.data.idade}</Text>
//       <Text style={styles.textoPessoa}>{props.data.email}</Text>
//     </View>
//   );
// }
