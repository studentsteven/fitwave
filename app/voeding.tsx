import Caltoevoegen from "@/components/calToevoegen";
import Navigation from "@/components/navigation/Navigation";
import CircularProgress from "@/components/Progress";
import "@/global.css";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const foodItems = [
    { id: 1, name: "Broodje Kroket", calories: 700 },
    { id: 2, name: "Appel", calories: 95 },
    { id: 3, name: "Pizza", calories: 285 },
    { id: 4, name: "Salade", calories: 150 },
    { id: 5, name: "Chocolade", calories: 210 },
    { id: 6, name: "Pasta", calories: 400 },
    { id: 7, name: "Banaan", calories: 105 },
    { id: 8, name: "Yoghurt", calories: 150 },
    { id: 9, name: "Noten", calories: 600 },
    { id: 10, name: "Muesli", calories: 200 },
  ];

  return (
    <Navigation
      background="https://www.athenas.nl/wp-content/uploads/voeding-thema-athenas.jpg"
      title="Voeding"
    >
      <View style={styles.container}>
        <CircularProgress
          value={2000}
          valuetext="calorieën"
          max={2500}
          circlesize={200}
          strokeWidth={10}
          BGcolor={"#e6e6e6"}
          colorStroke={"#ff6347"}
        />
        <View style={styles.voedingsbox}>
          <Text style={styles.boxtitel}>Voedingslijst</Text>
          <ScrollView>
            {foodItems.map((item) => (
              <View key={item.id} style={styles.lijstcomponent}>
                <Text style={styles.tekstcomponent}>
                  {item.id} | {item.name}
                </Text>
                <Text style={styles.tekstcomponent}>{item.calories} cal</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <Caltoevoegen />
      </View>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", gap: 20 },
  voedingsbox: {
    backgroundColor: "#4DBBCF",
    padding: 7,
    borderRadius: 10,
    height: 220,
    overflow: "hidden",
  },
  boxtitel: {
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
});
