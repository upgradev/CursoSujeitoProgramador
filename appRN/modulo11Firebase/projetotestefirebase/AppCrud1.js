import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  const cadastrar = async () => {
    if (nome !== "" && cargo !== "") {
      let usuarios = await firebase.database().ref("usuarios");
      //criando uma key aleatoria
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo,
      });
      alert("Cadastrao com sucesso");
      setCargo("");
      setNome("");
    }
  };

  useEffect(() => {
    async function dados() {
      //criar um nó
      // await firebase.database().ref("tipo").set("Vendedor");
      // removendo um no
      // await firebase.database().ref("tipo").remove();
      // inserir novo usuario
      // await firebase.database().ref("usuarios").child(3).set({
      //   nome: "Jose",
      //   cargo: "programador Junior"
      // })
      //update dentro child
      // await firebase.database().ref("usuarios").child(3).update({
      //   nome: "jose augusto"
      // })
      //  //olheiro ou listener da database, todo momento que mudar
      //  await firebase
      //  .database()
      //  .ref("usuarios/2")
      //  .on("value", (snapshot) => {
      //    setNome(snapshot.val().nome);
      //    setIdade(snapshot.val().idade);
      //  });
      //  //olheiro ou listener da database, todo momento que mudar
      //  await firebase
      //  .database()
      //  .ref("usuarios/1/nome")
      //  .on("value", (snapshot) => {
      //    setNome(snapshot.val());
      //  });
      // apenas uma unica vez, quando recarregar a pagina
      // await firebase
      //   .database()
      //   .ref("nome")
      //   .once('value', (snapshot) => {
      //     setNome(snapshot.val())
      //   })
      // //olheiro ou listener da database, todo momento que mudar
      // await firebase
      //   .database()
      //   .ref("nome")
      //   .on("value", (snapshot) => {
      //     setNome(snapshot.val());
      //   });
    }

    dados();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
        value={cargo}
      />

      <Button title="Novo funcionario" onPress={cadastrar} />
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
