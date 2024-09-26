import "@/global.css";
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from "react-native";
import Button from "@/components/Button";

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/backgroundosiris.png")}
        resizeMode="cover"
        style={styles.image}
      />

      <ImageBackground
        source={require("@/assets/young-people-2.jpg")}
        resizeMode="cover"
        style={[styles.image, { opacity: 0.4 }]}
      />

      <View style={styles.insideContainer}>
        <Image source={require("@/assets/aventuslogo.png")} />
        <Text style={{ fontSize: 29, marginTop: 12, color: "white" }}>
          Fitwave
        </Text>

        <TextInput
          style={[styles.input, { marginTop: 12 }]}
          placeholder="Gebruikersnaam"
          placeholderTextColor="#fff"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Emailadres"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Wachtwoord"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <Button text="Registreren" link="/home" type="primary" />

        <Text style={{marginTop: 12, marginBottom: 12, color: "#fff"}}>- Heb je al een account? -</Text>
        <Button link="/" type="secondary" text="Inloggen" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  insideContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 30,
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 12,
    color: "white",
    padding: 10,
  },
  accountSetting: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});