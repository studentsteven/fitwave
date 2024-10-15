import Navigation from "@/components/navigation/Navigation";
import Workouttabel from "@/components/Workouttabel";
import "@/global.css";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const fullBodyOefeningen = [
    { naam: "Squats", aantal: "12-15" },
    { naam: "Push-ups", aantal: "10-12" },
    { naam: "Bent-over rows (dumbbells)", aantal: "10-12" },
    { naam: "Lunges", aantal: "12 x 2" },
    { naam: "Plank (vasthouden)", aantal: "30-60 sec" },
    { naam: "Deadlifts (dumbbells)", aantal: "10-12" },
  ];
  const cardio = [
    { naam: "Deadlifts", aantal: "6-8" },
    { naam: "Bench Press", aantal: "6-8" },
    { naam: "Squats", aantal: "8-10" },
    { naam: "Barbell Rows", aantal: "8-10" },
    { naam: "Overhead Press", aantal: "6-8" },
    { naam: "Pull-Ups", aantal: "8-12" },
    { naam: "Leg Press", aantal: "8-10" },
    { naam: "Dumbbell Chest Press", aantal: "8-12" },
    { naam: "Arnold Press", aantal: "8-12" },
  ];
  return (
    <Navigation
      background="https://img.freepik.com/premium-photo/fitness-trained-muscular-guy-working-out-gym-strong-training-concept-photo_116317-36249.jpg"
      title="Bulken"
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.textBox}>
          <Text style={styles.header}>
            Jouw Workout Routine voor Bulken
            {"\n"}
          </Text>
          <Text style={styles.tussentext}>
            Heb je een passie voor krachttraining en het opbouwen van je spiermassa, 
            maar heb je nog geen idee hoe een routine voor deze doeleinden eruit moet zien? 
            Dan kunnen wij jou verder helpen met deze voorbeelden van workouts die je spieren laten groeien!
            {"\n"}
          </Text>
          <Text style={styles.subHeader}>Frequentie:</Text>
          <Text>3-4 dagen per week{"\n"}</Text>
          <Text style={styles.subHeader}>Duur:</Text>
          <Text>
            45-60 minuten per sessie
            {"\n"}
          </Text>
          <Text style={styles.subHeader}>Krachttraining (Full Body)</Text>
          <Workouttabel oefeningen={fullBodyOefeningen} />
          <Text style={styles.tussentext}>
            De onderstaande tabel bevat een groot aantal oefeningen die de spieren testen en de opbouw stimuleren. 
            Denk eraan om niet jezelf te overbelasten en ook een pauze te nemen om bijvoorbeeld water te consumeren.
            {"\n"}
          </Text>
          <Workouttabel oefeningen={cardio} />
          <Text style={styles.tussentext}>
            Voor een optimaal resultaat is de gerecommandeerde frequentie bovenaan de pagina relevant.
            Wees niet bang om je eigen toevoegingen toe te passen aan de workout! 
            Dit is eenmaal een algemeene workout voor bulken. 


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
    fontSize: 15
  },
  
});
