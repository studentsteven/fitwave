import { Pressable, StyleSheet, Text } from 'react-native';
import { Link } from "expo-router";
import { Children, ReactNode } from 'react';

type BtnProps = {
    text?: string,
    type?: "primary" | "secondary" | "danger" | "navitem",
    link?: string,
    children?: ReactNode
}

export default function Button({ text, type, link, children }: BtnProps) {

  // Laden stylesheet voor type
  var styleType;
  if(type == "primary") { styleType = styles.buttonPrimary }
  else if (type == "secondary") { styleType = styles.buttonSecondary }
  else if (type == "danger") { styleType = styles.buttonDanger }
  else if (type == "navitem") { styleType = styles.navitem }
  else { styleType = styles.buttonPrimary }

  if(link != undefined) {
    return (
      <Link href={link} asChild>
        <Pressable style={styleType}>
            {text ? <Text style={{color:"#fff", fontSize: 15, textAlign: "center" }}>{ text }</Text> : null}
            {children ? children : null}
        </Pressable>
      </Link>

    )
  } 
  else {
    return (
      <Pressable style={styleType}>
          {text ? <Text style={{color:"#fff", fontSize: 15, textAlign: "center" }}>{ text }</Text> : null}
          {children ? children : null}
      </Pressable>
    );
  }
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
  },
  navitem: {
    
  }
});