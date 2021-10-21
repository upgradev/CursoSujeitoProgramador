import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const logar = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        alert("Bem vindo... " + value.user.email);
        setUser(value.user.email);
      })
      .catch((error) => {
        alert("Ops algo deu errado!");
        return;
      });
    setEmail("");
    setPassword("");
  };

  const logout = async () => {
    await firebase.auth().signOut();
    setUser("");
    alert("Deslogado com sucesso");
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

      <Button title="Acessar" onPress={logar} />
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontSize: 23,
          textAlign: "center",
        }}
      >
        {user}
      </Text>
      {user.length > 0 ? (
        <Button title="Deslogar" onPress={logout} />
      ) : (
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontSize: 23,
            textAlign: "center",
          }}
        >
          Nenhum usuario esta logado
        </Text>
      )}
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
