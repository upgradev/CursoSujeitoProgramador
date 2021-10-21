import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cadastrar = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        alert("Usuario criado: " + value.user.email);
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Sua senha devet ter pelo menos 6 caracteres");
          return;
        }
        if (error.code === "auth/invalid-email") {
          alert("Email invalido");
          return;
        } else {
          alert("Ops algo deu errado!");
          return;
        }
      });
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
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
