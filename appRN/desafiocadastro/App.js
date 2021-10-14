import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 1, nome: 'Masculino'},
    {key: 2, nome: 'Feminino'},
  ]);
  const [limite, setLimite] = useState(0);
  const [estudante, setEstudante] = useState(false);

  // let sexoItem = sexo.map((value, key) => {
  //   return <Picker.Item key={key} value={key} label={value.nome} />;
  // });

  const enviarCadastro = () => {
    alert(
      `Nome: ${nome} \n Idade: ${idade}\n Sexo: ${sexo[sexoSelecionado].nome}
      \n Limite: ${limite.toFixed(0)}\n
      Estudante: ${estudante ? 'Estudante' : 'Não Estudante'} 
      `,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Banco Cadastro</Text>
      <TextInput
        style={styles.nome}
        placeholder="Nome"
        onChangeText={nome => setNome(nome)}
      />

      <TextInput
        style={styles.nome}
        placeholder="idade"
        onChangeText={idade => setIdade(idade)}
      />

      <Picker
        selectedValue={sexoSelecionado}
        onValueChange={(value, key) => setSexoSelecionado(value)}>
        {sexo.map((value, key) => {
          return <Picker.Item key={key} value={key} label={value.nome} />;
        })}
      </Picker>
      <Text> Sexo: {sexo[sexoSelecionado].nome}</Text>

      <Text style={{marginTop: 40}}>Seu Limite</Text>
      <Slider
        minimumValue={250}
        maximumValue={2000}
        onValueChange={limite => setLimite(limite)}
      />
      <Text>Limite: {limite.toFixed(0)} </Text>

      <Text style={{marginTop: 40}}>Estudante</Text>
      <Switch
        value={estudante}
        onValueChange={estudante => setEstudante(estudante)}
      />
      <Text>{estudante ? 'Estudante' : 'Não estudante'}</Text>

      <TouchableOpacity style={styles.btnEnviar} onPress={enviarCadastro}>
        <Text style={styles.txtBtnEnviar}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
  },
  nome: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 10,
  },
  btnEnviar: {
    marginTop: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 20,
  },
  txtBtnEnviar: {
    color: '#fff',
  },
});
