import Navigation from "@/components/navigation/Navigation";
import Workouttabel from "@/components/Workouttabel";
import "@/global.css";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const fullBodyOefeningen = [
    { naam: "Rennen/Wandelen", aantal: "10-15 min" },
    { naam: "Intervaltraining", aantal: "1-2 min" },
    { naam: "Squats", aantal: "10-15" },
    { naam: "Push-ups", aantal: "10-15" },
    { naam: "Lunges", aantal: "10-12 x 2" },
    { naam: "Plank", aantal: "30-60 sec" },
    { naam: "Hamstring Stretch", aantal: "30 sec x 2" },
    { naam: "Cat-Cow Stretch", aantal: "1-2 min" },
    { naam: "Child's Pose", aantal: "30 sec" },
    { naam: "Ademhalingsoefeningen", aantal: "1-2 min" },
  ];

  return (
    <Navigation
      background="https://gezondnu.nl/content/uploads/2021/10/202015.gezondnu-bewegen-maakt-gelukkig-scaled-1.jpg"
      title="Gezondheid"
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.textBox}>
          <Text style={styles.header}>
            Jouw Workout Routine voor een gezonde levenstijl
            {"\n"}
          </Text>
          <Text style={styles.tussentext}>
            Als je behoefde hebt aan een gezonde leefstijl, dan is deze workout
            voor jou! Met deze oefeningen houd je je lichaam flexibel en mobiel.
            {"\n"}
          </Text>
          <Text style={styles.subHeader}>Frequentie:</Text>
          <Text>willekeurig{"\n"}</Text>
          <Text style={styles.subHeader}>Duur:</Text>
          <Text>
            willekeurig
            {"\n"}
          </Text>
          <Text style={styles.subHeader}>Algemene gezonde oefeningen</Text>
          <Workouttabel oefeningen={fullBodyOefeningen} />
          <Text style={styles.tussentext}>
            Door consequent te investeren in je gezondheid, verbeter je niet
            alleen je fysieke fitheid, maar ook je mentale welzijn. Vergeet niet
            dat herstel net zo belangrijk is als inspanning
            {"\n"}
          </Text>
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
  tussentext: {
    fontSize: 15,
  },
});
