import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 85, height: 85 }}
          resizeMode="contain"
        />

        <Text style={{ color: "#fff", fontSize: 18, marginTop: 5 }}>
          Bem Vindo
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 17,
            fontWeight: "bold",
            paddingBottom: 25,
          }}
        >
          {user && user.nome}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        inactiveBackgroundColor="#c62c36"
        labelStyle={{color: "#fff"}}
        label="Sair do App"
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  );
}
