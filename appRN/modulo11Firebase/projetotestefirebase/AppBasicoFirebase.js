import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App() {
  const [nome, setNome] = useState("Carregando");
  const [idade, setIdade] = useState("");

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
    <View style={{ marginTop: 25 }}>
      <Text style={{ fontSize: 25 }}>Nome {nome}</Text>
      <Text style={{ fontSize: 25 }}>Idade {idade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
