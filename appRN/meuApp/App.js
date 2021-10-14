import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput} from 'react-native';

export default function App() {
  // const [nome, setNome] = useState('Cleison');
  // const [idade, setIdade] = useState(20);

  // function entrar(nome, idade) {
  //   setNome(nome);
  //   setIdade(idade);
  // }

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  // function pegaNome(texto) {
  //   if (texto.length > 0) {
  //     setNome('Bem vindo: ' + texto);
  //   } else {
  //     setNome('');
  //   }
  // }

  function entrar() {
    if (input === '') {
      setNome("")
      alert('Digite seu nome');
      return;
    }
    else{
      setNome("Bem vindo: " + input);
    }
    
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        // onChangeText={text => pegaNome(text)}
        onChangeText={text => setInput(text)}
      />
      <Button title="Entrar" onPress={entrar} />
      <Text style={styles.texto}>{nome}</Text>
    </View>

    // <View
    //   style={{
    //     flex: 1,
    //     flexDirection: 'column',
    //     alignItems: 'flex-start', //mexe na coluna se flexDirection for row senão é ao contrario, mexe na linha
    //     justifyContent: 'flex-end', //mexe na linha se flexDirection for row senão é ao contrario, mexe na coluna
    //   }}>
    //   <View style={{height: 50, width: 50, backgroundColor: '#121212'}}></View>
    //   <View style={{height: 50, width: 50, backgroundColor: 'red'}}></View>
    //   <View style={{height: 50, width: 50, backgroundColor: 'green'}}></View>
    // </View>
    // <View style={styles.area}>
    //   {/* <Button title="Mudar Nome" onPress={() => entrar('cleison frança', 34)} /> */}
    //   <Text style={[styles.titulo, styles.textoAlinhado]}> Cleison </Text>
    //   <Text style={styles.titulo}> Sujeito </Text>
    //   <Text style={[styles.subtitulo, styles.textoAlinhado]}>Texto 3</Text>
    //   {/* <Text style={{color: '#ff0000', fontSize: 25, margin: 15}}>
    //     Meu Primeiro App
    //   </Text>
    //   <Text style={{fontSize: 18, color: 'green'}}>Aula de React Native</Text>
    //   <Logo largura={350} altura={350} fulano="Cleison" /> */}
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
  },
});

// const styles = StyleSheet.create({
//   area: {
//     marginTop: 60,
//   },
//   titulo: {
//     fontSize: 20,
//     color: '#ff0000',
//   },
//   subtitulo: {
//     color: '#00ff00',
//     fontSize: 17,
//     marginTop: 15,
//   },
//   textoAlinhado: {
//     textAlign: "center"
//   }
// });

// function Logo(props) {
//   let img = 'https://sujeitoprogramador.com/reactlogo.png';

//   return (
//     <View>
//       <Image
//         source={{uri: img}}
//         style={{width: props.largura, height: props.altura}}
//       />
//       <Text>{props.fulano}</Text>
//     </View>
//   );
// }
