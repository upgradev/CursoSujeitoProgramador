import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

import { Container, Nome, NewLink, NewText, Logout, LogoutText } from "./style";



export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Nome> {user && user.nome} </Nome>
      <NewLink>
        <NewText onPress={() => navigation.navigate("Registrar")}>
          Registrar Gastos
        </NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}

const styles = StyleSheet.create({});
