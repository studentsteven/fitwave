import { Pressable, StyleSheet, Text } from 'react-native';

type BtnProps = {
    text: string,
    functie: () => void,
    type: "primary" | "secondary" | "danger"
}

export default function Button({ text, functie, type }: BtnProps) {

  // Laden stylesheet voor type
  var styleType;
  if(type == "primary") { styleType = styles.buttonPrimary }
  else if (type == "secondary") { styleType = styles.buttonSecondary }
  else if (type == "danger") { styleType = styles.buttonDanger }
  else { styleType = styles.buttonPrimary }

  return (
    <Pressable onPress={functie} style={styleType}>
        <Text style={{color:"#fff", fontSize: 15, textAlign: "center" }}>{ text }</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
      backgroundColor: "#4DBBCF",
      padding: 7,
      width: "100%",
      borderRadius: 8
  },
  buttonSecondary: {
    backgroundColor: "#A6ABAB",
    padding: 7,
    width: "100%",
    borderRadius: 8
  },
  buttonDanger: {
    backgroundColor: "#CF4D4D",
    padding: 7,
    width: "100%",
    borderRadius: 8
  }
});