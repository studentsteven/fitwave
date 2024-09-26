import { ImageBackground, Platform, StyleSheet, View } from "react-native";
import NavItem from "./Navitem";

export default function Footer() {
  return (
    <View style={{ position: "relative" }}>
      <ImageBackground
        resizeMode="cover"
        source={require("@/assets/backgroundosiris.png")}
        style={styles.background}
      />

      <View style={styles.nav}>
        <NavItem afbeelding="workout" />
        <NavItem afbeelding="overzicht" />
        <NavItem afbeelding="home" />
        <NavItem afbeelding="leaderbord" />
        <NavItem afbeelding="voeding" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: Platform.OS === "ios" ? 10 : 12,
  },
  background: {
    width: "100%",
    height: 160,
    justifyContent: "center",
    position: "absolute",
  },
});
