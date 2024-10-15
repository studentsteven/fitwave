import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function Information() {
  const screenWidth = Dimensions.get("window").width - 50;

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      <View style={styles.items}>
        <View style={styles.box}>
          <Image
            style={styles.img}
            source={require("../../assets/calories.png")}
          />
          <Text style={styles.text}>
            {Math.floor(Math.random() * (5000 - 100 + 1)) + 100}
          </Text>
          <Text style={styles.text}>Cal</Text>
        </View>

        <View style={styles.box}>
          <Image
            style={styles.img}
            source={require("../../assets/location-mark.png")}
          />
          <Text style={styles.text}>{(Math.random() * 10).toFixed(1)}</Text>
          <Text style={styles.text}>Km</Text>
        </View>

        <View style={styles.box}>
          <Image
            style={styles.img}
            source={require("../../assets/clock.png")}
          />
          <Text style={styles.text}>{(Math.random() * 10).toFixed(1)}</Text>
          <Text style={styles.text}>U</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  items: {
    paddingHorizontal: 5,
    padding: 10,
    backgroundColor: "#4DBBCF",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  box: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },

  text: {
    color: "#fff",
    fontSize: 16,
  },

  img: {
    width: 65,
    height: 65,
  },
});
