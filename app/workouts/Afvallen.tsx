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
    { naam: "Hardlopen", aantal: "12-15 minuten" },
    { naam: "Fietsen", aantal: "20-30 minuten" },
    { naam: "Touwtje Springen", aantal: "10-15 minuten" },
    { naam: "Wandelen", aantal: "30-40 minuten" },
    { naam: "Traplopen", aantal: "10-15 minuten" },
    { naam: "Dansen", aantal: "20-30 minuten" },
  ];
  
  return (
    <Navigation
      background="https://olimpsport.com/media/mageplaza/blog/post/image//w/y/wyprobuj-5-najlepszych-cwiczen-cardio-na-silowni_5.jpg"
      title="Afvallen"
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.textBox}>
          <Text style={styles.header}>
            Jouw Workout Routine voor Gewichtsverlies
            {"\n"}
          </Text>
          <Text style={styles.tussentext}>
            Heb je veel vet? Geen zorgen, met deze kleine workout routine helpen wij jou om langzaam maar zeker progressie te maken naar een gezonder lichaam!
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
          <Text style={styles.tussentext}>
            De meest effectieve manier om vet te verliezen is door veel te bewegen.
            De onderstaande tabel geeft diverse voorbeelden van trainingen die hoge lichaams beweging vereisen.
            {"\n"}
          </Text>
          <Workouttabel oefeningen={cardio} />
          <Text style={styles.tussentext}>
            Voor een optimaal resultaat is de gerecommandeerde frequentie bovenaan de pagina relevant.
            Wees niet bang om je eigen toevoegingen toe te passen aan de workout! 
            Dit is eenmaal een algemeene workout voor afvallen. 


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
