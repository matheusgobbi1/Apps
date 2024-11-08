import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import Constants from "expo-constants";

const API_URL =
  Constants.expoConfig?.extra?.API_URL || Constants.manifest?.extra?.API_URL;
  
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/check-user`, {
        email,
        password,
      });

      if (response.data.exists) {
        // Salva o token no Secure Store
        await SecureStore.setItemAsync("userToken", response.data.token);
        navigation.navigate("Home");
      } else {
        setErrorMessage("Login ou senha incorretos.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Erro ao verificar conta. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Fazer Login</Text>

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

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="*****"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <Pressable
        style={({ pressed }) => [
          styles.loginButton,
          pressed ? styles.loginButtonPressed : null,
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      <Text style={styles.signupText}>Não possui uma conta?</Text>
      <Pressable onPress={() => navigation.navigate("AccountType")}>
        <Text style={styles.signupLink}>Cadastre-se</Text>
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
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#FFA500",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    color: "#FFA500",
    fontSize: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#FFA500",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#666",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  loginButtonPressed: {
    backgroundColor: "#FFA500",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  signupText: {
    color: "#fff",
    fontSize: 14,
  },
  signupLink: {
    color: "#FFA500",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
