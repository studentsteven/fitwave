import { Link } from "expo-router";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type BtnProps = {
  text?: string;
  type?: "primary" | "secondary" | "danger" | "navitem";
  link?: string;
  children?: ReactNode;
  pressFunc?: (event: any) => void;
};

export default function Button({
  text,
  type,
  link,
  children,
  pressFunc,
}: BtnProps) {
  // Laden stylesheet voor type
  const getStyleType = () => {
    switch (type) {
      case "primary":
        return styles.buttonPrimary;
      case "secondary":
        return styles.buttonSecondary;
      case "danger":
        return styles.buttonDanger;
      case "navitem":
        return styles.navitem;
      default:
        return styles.buttonPrimary;
    }
  };

  const styleType = getStyleType();

  if (link) {
    return (
      <Link href={link} asChild>
        <Pressable style={styleType}>
          {text ? (
            <Text style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
              {text}
            </Text>
          ) : null}
          {children ? children : null}
        </Pressable>
      </Link>
    );
  } else {
    return (
      <Pressable style={styleType} onPress={pressFunc}>
        {text ? (
          <Text style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
            {text}
          </Text>
        ) : null}
        {children ? children : null}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#4DBBCF",
    padding: 7,
    borderRadius: 8,
    width: "100%",
  },
  buttonSecondary: {
    backgroundColor: "#A6ABAB",
    padding: 7,
    borderRadius: 8,
    width: "100%",
  },
  buttonDanger: {
    backgroundColor: "#CF4D4D",
    padding: 7,
    borderRadius: 8,
    width: "100%",
  },
  navitem: {
    // no styles
  },
});
