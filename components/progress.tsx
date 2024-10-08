import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
 
const CircularProgress = ({ value, valuetext, max, circlesize }) => {
  var circumference = 0;
  const strokeWidth = 10;
  const radius = (circlesize - strokeWidth) / 2;
  if (value > max) {
    circumference = 1;
  } else {
    circumference = 2 * Math.PI * radius;
  }
  const strokeDashoffset = circumference - (circumference * value) / max;
 
  return (
    <View style={styles.container}>
      <Svg height={circlesize} width={circlesize}>
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx={circlesize / 2}
          cy={circlesize / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#ff6347"
          fill="none"
          cx={circlesize / 2}
          cy={circlesize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${circlesize / 2}, ${circlesize / 2}`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.progressText}>{`${Math.round(value)}`}</Text>
        <Text>{valuetext}</Text>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
 
export default CircularProgress;
 
 