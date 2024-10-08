import Navigation from "@/components/navigation/Navigation";
import "@/global.css";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Average from "@/components/Overzicht/Average";
import Chart from "@/components/Overzicht/Chart";
import Information from "@/components/Overzicht/Information";

export default function App() {
  const [typeO, setTypeO] = useState("day");
  return (
    <Navigation
      background="https://www.aventus.nl/sites/default/files/styles/study_header_l/public/2024-09/rodeo-project-management-software-m9HQzdoK9u8-unsplash.webp?h=136e3684&itok=FC1NvTGV" // Use parentheses for require
      title="Overzicht"
    >
      <View style={styles.container}>
        <View style={styles.TypeSelector}>
          <TouchableOpacity onPress={() => setTypeO("day")}>
            <Text style={[typeO === "day" && styles.underline]}>dag</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTypeO("week")}>
            <Text style={[typeO === "week" && styles.underline]}>Week</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTypeO("year")}>
            <Text style={[typeO === "year" && styles.underline]}>Jaar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.items}>
          <View style={styles.average}>
            <Average></Average>
          </View>

          <View style={styles.chart}>
            <Chart type={typeO}></Chart>
          </View>

          <View style={styles.information}>
            <Information></Information>
          </View>
        </View>
      </View>
    </Navigation>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  TypeSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  underline: {
    textDecorationLine: "underline",
  },
  items: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  average: {
    flex: 0.5,
  },
  chart: {
    flex: 0.6,
  },
  information: {
    flex: 0.5,
  },
});
