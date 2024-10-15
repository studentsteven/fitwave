import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Bol({ days, color }) {
  return (
    <View style={styles.container}>
      <View style={styles.boxMain}>
        <View style={styles.box}>
          <View style={[styles.circle, { backgroundColor: color[0] }]} />
          <Text>{days[0][0]}</Text>
        </View>

        <View style={styles.box}>
          <View style={[styles.circle, { backgroundColor: color[1] }]} />
          <Text>{days[0][1]}</Text>
        </View>

        <View style={styles.box}>
          <View style={[styles.circle, { backgroundColor: color[2] }]} />
          <Text>{days[0][2]}</Text>
        </View>

        <View style={styles.box}>
          <View style={[styles.circle, { backgroundColor: color[3] }]} />
          <Text>{days[0][3]}</Text>
        </View>

        <View style={styles.box}>
          <View style={[styles.circle, { backgroundColor: color[4] }]} />
          <Text>{days[0][4]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  boxMain: {
    flexDirection: "row",
  },

  box: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
});
