import Navigation from "@/components/navigation/Navigation";
import Workouttabel from "@/components/Workouttabel";
import "@/global.css";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const fullBodyOefeningen = [
    { naam: "Squats", aantal: "12-15" },
    { naam: "Push-ups", aantal: "10-12" },
    { naam: "Bent-over rows (dumbbells)", aantal: "10-12" },
    { naam: "Lunges", aantal: "12 per been" },
    { naam: "Plank (vasthouden)", aantal: "30-60 sec" },
    { naam: "Deadlifts (dumbbells)", aantal: "10-12" },
  ];
  const cardio = [
    { naam: "rennen", aantal: "12-15 minuten" },
    { naam: "Push-ups", aantal: "10-12" },
    { naam: "Bent-over rows (dumbbells)", aantal: "10-12" },
    { naam: "Lunges", aantal: "12 per been" },
    { naam: "Plank (vasthouden)", aantal: "30-60 sec" },
    { naam: "Deadlifts (dumbbells)", aantal: "10-12" },
  ];
  return (
    <Navigation
      background="https://tapoutdrinks.com/wp-content/uploads/2021/03/beautiful-fit-people-working-out-in-gym-together-NH4EV43.jpg"
      title="Afvallen"
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.textBox}>
          <Text style={styles.header}>
            Jouw Workout Routine voor Gewichtsverlies
            {"\n"}
          </Text>
          <Text>
            Ben je klaar om die extra kilo's kwijt te raken en je fitnessdoelen
            te bereiken? Deze effectieve workout routine is speciaal ontworpen
            om je te helpen af te vallen, je uithoudingsvermogen te verbeteren
            en je algehele gezondheid te bevorderen. Volg deze routine vier tot
            vijf dagen per week en zie snel resultaat!
            {"\n"}
          </Text>
          <Text style={styles.subHeader}>Frequentie:</Text>
          <Text>4-5 dagen per week{"\n"}</Text>
          <Text style={styles.subHeader}>Duur:</Text>
          <Text>
            45-60 minuten per sessie
            {"\n"}
          </Text>
          <Text style={styles.subHeader}>Krachttraining (Full Body)</Text>
          <Workouttabel oefeningen={fullBodyOefeningen} />
          <Text>
            Ben je klaar om die extra kilo's kwijt te raken en je fitnessdoelen
            te bereiken?
            {"\n"}
          </Text>
          <Workouttabel oefeningen={cardio} />
        </View>
      </ScrollView>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
  textBox: {
    backgroundColor: "#FFFFFF",
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
  },
});
