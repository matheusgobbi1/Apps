import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function CreatePassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    if (!termsConsent) {
      alert("Você precisa concordar com os Termos e Condições");
      return;
    }

    navigation.navigate("Home"); // Navegue para a próxima etapa
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Criar Conta</Text>

      <Text style={styles.label}>Crie uma senha</Text>
      <TextInput
        style={styles.input}
        placeholder="****"
        placeholderTextColor="#909090"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirme sua senha</Text>
      <TextInput
        style={styles.input}
        placeholder="****"
        placeholderTextColor="#909090"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setMarketingConsent(!marketingConsent)}
          style={styles.checkbox}
        >
          <View
            style={[
              styles.checkboxCircle,
              marketingConsent && styles.checkboxCircleSelected,
            ]}
          />
          <Text style={styles.checkboxText}>
            Desejo receber mensagens de marketing da Bean Music
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setTermsConsent(!termsConsent)}
          style={styles.checkbox}
        >
          <View
            style={[
              styles.checkboxCircle,
              termsConsent && styles.checkboxCircleSelected,
            ]}
          />
          <Text style={styles.checkboxText}>
            Eu concordo com os{" "}
            <Text style={styles.linkText}>
              Termos e Condições de Uso da Bean Music
            </Text>
            .
          </Text>
        </TouchableOpacity>
      </View>

      <Pressable
        style={({ hovered, pressed }) => [
          styles.continueButton,
          pressed || hovered ? styles.continueButtonHover : null,
        ]}
        onPress={handleCreateAccount}
      >
        <Text style={styles.continueButtonText}>Criar conta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#EA7730",
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    color: "#EA7730",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#EA7730",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#F7F7F7",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EA7730",
    marginRight: 8,
    backgroundColor: "#121212",
  },
  checkboxCircleSelected: {
    backgroundColor: "#EA7730",
  },
  checkboxText: {
    color: "#F7F7F7",
    fontSize: 14,
  },
  linkText: {
    color: "#EA7730",
    textDecorationLine: "underline",
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
  continueButtonHover: {
    backgroundColor: "#EA7730",
  },
  continueButtonText: {
    color: "#F7F7F7",
    fontSize: 16,
    fontWeight: "bold",
  },
});
