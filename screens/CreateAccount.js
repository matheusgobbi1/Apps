import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

export default function CreateAccount({ route, navigation }) {
  const { accountType } = route.params; // Recebe o tipo de conta (Artista ou Curador)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spotifyEmail, setSpotifyEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    console.log({
      accountType,
      name,
      email,
      spotifyEmail,
      phone,
    });
    navigation.navigate("CreatePassword");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Criar Conta</Text>

      <Text style={styles.label}>Como devemos chamar você?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome exemplo"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="email@exemplo.com"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>E-mail do Spotify</Text>
      <TextInput
        style={styles.input}
        placeholder="email@exemplo.com"
        placeholderTextColor="#ccc"
        value={spotifyEmail}
        onChangeText={setSpotifyEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Número de telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="(00) 0000-0000"
        placeholderTextColor="#ccc"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Pressable
        style={({ pressed }) => [
          styles.continueButton,
          pressed ? styles.continueButtonPressed : null,
        ]}
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continuar</Text>
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
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#EA7730",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    color: "#EA7730",
    fontSize: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#EA7730",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#909090",
  },
  continueButton: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    height: 50,
    backgroundColor: "#909090",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonPressed: {
    backgroundColor: "#EA7730",
  },
  continueButtonText: {
    color: "#F7F7F7",
    fontSize: 16,
    fontWeight: "bold",
  },
});
