import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text onPress={() => alert("test")}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#D9D9D9",
    padding: 12,
    width: "100%",
  },
});
