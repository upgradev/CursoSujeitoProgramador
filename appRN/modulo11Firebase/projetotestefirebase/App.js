import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");

  const cadastrar = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        // alert(value.user.uid);
        firebase.database().ref("usuarios").child(value.user.uid).set({
          nome: nome
        })
        alert("Usuario criado com sucesso")
        setNome("")
        setEmail("")
        setPassword("")
      })
      .catch((error) => {
        alert("Algo deu errado");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(nome) => setNome(nome)}
        value={nome}
      />

      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      />

      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
    height: 40,
    fontSize: 17,
  },
});
