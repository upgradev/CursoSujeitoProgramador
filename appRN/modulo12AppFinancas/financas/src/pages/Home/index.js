import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import HistoricoList from "../../components/HistoricoList";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";

import {
  Background,
  Container,
  Nome,
  Saldo,
  Title,
  List,
  Area,
} from "./styles";
import { format, isPast, isBefore } from "date-fns";

import Icon from "react-native-vector-icons/MaterialIcons";

import DatePicker from "../../components/DatePicker";

export default function Home() {
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    const loadList = async () => {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

      await firebase
        .database()
        .ref("historico")
        .child(uid)
        .orderByChild("date")
        .equalTo(format(newDate, "dd/MM/yyyy"))
        .limitToLast(10)
        .on("value", (snapshot) => {
          setHistorico([]);
          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              date: childItem.val().date,
            };
            setHistorico((oldArray) => [...oldArray, list].reverse());
          });
        });
    };

    loadList();
  }, [newDate]);

  const handleDelete = (data) => {
    //pegando data do item
    const [diaItem, mesItem, anoItem] = data.date.split("/");
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

    //pegando data hoje
    const dateDiaHoje = format(new Date(), "dd/MM/yyyy");
    const [diaHoje, mesHoje, anoHoje] = dateDiaHoje.split("/");
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);

    if (isBefore(dateItem, dateHoje)) {
      //se a data ja passou
      alert("Você não pode excluir umregistro antigo");
      return;
    }

    Alert.alert(
      "Cuidade Atenção",
      `Você deseja excluir ${data.tipo} - Valor ${data.valor}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: () => handleDeleteSuccess(data),
        },
      ]
    );
  };

  const handleDeleteSuccess = async (data) => {
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === "despesa"
          ? (saldoAtual += parseFloat(data.valor))
          : (saldoAtual -= parseFloat(data.valor));

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .child("saldo")
          .set(saldoAtual);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPicker = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const onChange = (date) => {
    setShow(Platform.OS === "ios");
    setNewDate(date);
    console.log(date);
  };

  return (
    <Background>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>
          R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
        </Saldo>
      </Container>

      <Area>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon name="event" color="#fff" size={30} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyStractor={(item) => item.key}
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={handleDelete} />
        )}
      />

      {show && (
        <DatePicker onClose={handleClose} date={newDate} onChange={onChange} />
      )}
    </Background>
  );
}

const styles = StyleSheet.create({});
