import "@/global.css";
import { StyleSheet, Text, View } from 'react-native';

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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    width: "100%", 
  },
});