import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export default function AccountType({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Bean Music</Text>
      </View>
      <Text style={styles.subtitle}>
        Bem-vindo à Bean Music!{"\n"}Para continuar, selecione o tipo de conta.
      </Text>

      <Pressable
        style={({ hovered, pressed }) => [
          styles.button,
          hovered || pressed ? styles.buttonPressed : styles.buttonArtist,
        ]}
        onPress={() =>
          navigation.navigate("CreateAccount", { accountType: "Artista" })
        }
      >
        <Text style={styles.buttonText}>Sou Artista</Text>
      </Pressable>

      <Pressable
        style={({ hovered, pressed }) => [
          styles.button,
          hovered || pressed ? styles.buttonPressed : styles.buttonCurator,
        ]}
        onPress={() =>
          navigation.navigate("CreateAccount", { accountType: "Curador" })
        }
      >
        <Text style={styles.buttonText}>Sou Curador</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    color: "#EA7730",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonArtist: {
    backgroundColor: "black",
    borderColor: "#EA7730",
    borderWidth: 1,
  },
  buttonCurator: {
    backgroundColor: "black",
    borderColor: "#EA7730",
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: "#EA7730",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
