import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function Average() {
  const screenWidth = Dimensions.get("window").width - 50;
  const steps = Math.floor(Math.random() * (10000 - 2500 + 1)) + 2500;

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      <Image style={styles.img} source={require("../../assets/Walking.png")} />

      <View style={styles.averageStepsBox}>
        <Text style={styles.averageStepsText}>Gemiddelde stappen:</Text>
        <Text style={styles.averageStepsDynamic}>{steps}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },

  averageStepsBox: {
    padding: 10,
    backgroundColor: "#4DBBCF",
    borderRadius: 10,
    width: 210,
    height: 90,
  },

  averageStepsText: {
    textAlign: "center",
    color: "#fff",
  },

  averageStepsDynamic: {
    textAlign: "center",
    color: "#fff",
    fontSize: 37,
  },
});
