import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const allPlayers = [
    { id: 1, name: "Jan", punten: 38454 },
    { id: 2, name: "Kees", punten: 38454 },
    { id: 3, name: "Sophie", punten: 1000 },
    { id: 4, name: "Emma", punten: 1000000000000 },
    { id: 5, name: "Piet", punten: 210 },
    { id: 6, name: "Lars", punten: 130 },
    { id: 7, name: "Nina", punten: 200 },
    { id: 8, name: "Tom", punten: 160 },
    { id: 9, name: "Anna", punten: 180 },
    { id: 10, name: "Mark", punten: 240 },
    { id: 11, name: "Jesse", punten: 155 },
    { id: 12, name: "Olivia", punten: 165 },
    { id: 13, name: "Lucas", punten: 175 },
    { id: 14, name: "Sara", punten: 185 },
    { id: 15, name: "David", punten: 195 },
    { id: 16, name: "Maya", punten: 205 },
    { id: 17, name: "Finn", punten: 215 },
    { id: 18, name: "Isla", punten: 225 },
    { id: 19, name: "Bram", punten: 235 },
    { id: 20, name: "Lotte", punten: 245 },
    { id: 21, name: "Niels", punten: 140 },
    { id: 22, name: "Jade", punten: 170 },
    { id: 23, name: "Rick", punten: 150 },
    { id: 24, name: "Lana", punten: 160 },
    { id: 25, name: "Tygo", punten: 180 },
    { id: 26, name: "Yara", punten: 190 },
    { id: 27, name: "Milan", punten: 200 },
    { id: 28, name: "Chloe", punten: 210 },
    { id: 29, name: "Victor", punten: 220 },
    { id: 30, name: "Tess", punten: 230 },
    { id: 31, name: "Joris", punten: 240 },
    { id: 32, name: "Demi", punten: 250 },
    { id: 33, name: "Sven", punten: 155 },
    { id: 34, name: "Jill", punten: 165 },
    { id: 35, name: "Hugo", punten: 175 },
    { id: 36, name: "Lina", punten: 185 },
    { id: 37, name: "Stijn", punten: 195 },
    { id: 38, name: "Zoë", punten: 205 },
    { id: 39, name: "Pablo", punten: 215 },
    { id: 40, name: "Faye", punten: 225 },
    { id: 41, name: "Mats", punten: 235 },
    { id: 42, name: "Anouk", punten: 245 },
    { id: 43, name: "Quinn", punten: 150 },
    { id: 44, name: "Elin", punten: 160 },
    { id: 45, name: "Daan", punten: 170 },
    { id: 46, name: "Lia", punten: 180 },
    { id: 47, name: "Ruben", punten: 190 },
    { id: 48, name: "Sam", punten: 200 },
    { id: 49, name: "Timo", punten: 210 },
    { id: 50, name: "Iris", punten: 220 },
  ];

  const friendPlayers = [
    { id: 1, name: "Jan", punten: 150 },
    { id: 2, name: "Sophie", punten: 220 },
    { id: 3, name: "Nina", punten: 200 },
    { id: 4, name: "Anna", punten: 180 },
    { id: 5, name: "Mark", punten: 240 },
  ];

  const [typeO, setTypeO] = useState("vrienden");

  const displayedPlayers = typeO === "vrienden" ? friendPlayers : allPlayers;

  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://images.westend61.de/0000049697pw/winners-podium-in-grass-field-TCF00518.jpg"
        title="Leaderboard"
      >
        <View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => setTypeO("vrienden")}>
              <Text style={[typeO === "vrienden" && styles.underline]}>
                Vrienden
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTypeO("iedereen")}>
              <Text style={[typeO === "iedereen" && styles.underline]}>
                Iedereen
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.voedingsbox}>
            <View style={styles.boxtitel}>
              <Text style={styles.voedingstitel}>Leaderboard</Text>
              <Text style={{ color: "white" }}>Punten</Text>
            </View>
            <ScrollView>
              {displayedPlayers.map((item) => (
                <View key={item.id} style={styles.lijstcomponent}>
                  <Text style={styles.tekstcomponent}>
                    {item.id} | {item.name}
                  </Text>
                  <Text style={styles.tekstcomponent}>
                    {item.punten.toLocaleString("nl-NL")}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  voedingsbox: {
    backgroundColor: "#4DBBCF",
    padding: 15,
    borderRadius: 10,
    height: "95%",
    overflow: "hidden",
  },
  boxtitel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  voedingstitel: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  lijstcomponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 4,
    padding: 5,
    marginVertical: 2.5,
  },
  tekstcomponent: {
    color: "white",
  },
  TypeSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  underline: {
    textDecorationLine: "underline",
  },
});
