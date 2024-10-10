import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { ScrollView, StyleSheet, Text, View } from "react-native"; // Importeer ScrollView en ImageBackground

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://tapoutdrinks.com/wp-content/uploads/2021/03/beautiful-fit-people-working-out-in-gym-together-NH4EV43.jpg"
        title="Gezondheid"
      >
        <View style={styles.container}>
          {/* Scrollbare tekst */}
          <ScrollView style={styles.scrollView}>
            <View style={styles.textBox}>
              <Text style={styles.text}>
                <Text style={styles.header}>
                  Jouw Workout Routine voor Betere Gezondheid
                </Text>
                {"\n\n"}
                Deze routine is ontworpen om je algemene gezondheid en welzijn
                te verbeteren. Het bevat een mix van krachttraining,
                cardiovasculaire oefeningen, flexibiliteit en herstel. Volg deze
                routine drie tot vier keer per week om je fitheid te verbeteren,
                je energie te verhogen en je gezondheid te ondersteunen!
                {"\n\n"}
                <Text style={styles.subHeader}>Frequentie:</Text> 3-4 dagen per
                week
                {"\n"}
                <Text style={styles.subHeader}>Duur:</Text> 45-60 minuten per
                sessie
                {"\n\n"}
                <Text style={styles.subHeader}>Dag 1: Full Body Workout</Text>
                {"\n\n"}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                {"\n"}
                Begin met een lichte cardiovasculaire opwarming zoals fietsen,
                wandelen of touwtjespringen.
                {"\n\n"}
                <Text style={styles.subHeader}>
                  Krachttraining en Cardiovasculair (3 sets)
                </Text>
                {"\n\n"}
                {/* Tabel voor Full Body workout */}
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Oefening</Text>
                  <Text style={styles.tableHeader}>Herhalingen</Text>

                  <Text style={styles.tableRow}>Squats</Text>
                  <Text style={styles.tableRow}>15-20</Text>
                  <Text style={styles.tableRow}>Push-ups</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Lunges</Text>
                  <Text style={styles.tableRow}>12 per been</Text>
                  <Text style={styles.tableRow}>Plank (vasthouden)</Text>
                  <Text style={styles.tableRow}>30-60 sec</Text>
                  <Text style={styles.tableRow}>
                    Deadlifts (met lichaamsgewicht of lichte gewichten)
                  </Text>
                  <Text style={styles.tableRow}>10-12</Text>
                </View>
                {"\n"}
                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                {"\n"}
                Stretch je buikspieren en onderrug.
                {"\n\n"}
                <Text style={styles.subHeader}>
                  Dag 2: Flexibiliteit en Mobiliteit
                </Text>
                {"\n"}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                {"\n"}
                Begin met lichte dynamische stretches zoals armcirkels en
                beenzwaaien.
                {"\n\n"}
                <Text style={styles.subHeader}>
                  Yoga en Stretching (3 sets)
                </Text>
                {"\n\n"}
                {/* Tabel voor Flexibiliteit en Mobiliteit */}
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Oefening</Text>
                  <Text style={styles.tableHeader}>Herhalingen</Text>

                  <Text style={styles.tableRow}>Plank</Text>
                  <Text style={styles.tableRow}>30-60 sec</Text>
                  <Text style={styles.tableRow}>Push-ups</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Russian Twists</Text>
                  <Text style={styles.tableRow}>15 per kant</Text>
                  <Text style={styles.tableRow}>Mountain Climbers</Text>
                  <Text style={styles.tableRow}>30 sec</Text>
                  <Text style={styles.tableRow}>Leg Raises</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                </View>
                {"\n\n"}
                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                {"\n"}
                Doe langzame ademhalingsoefeningen en volledige
                lichaamstretching.
                {"\n"}
              </Text>
            </View>
          </ScrollView>
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Achtergrondkleur voor contrast
  },
  scrollView: {
    width: "100%", // Zorg dat de ScrollView de volledige breedte heeft
  },
  textBox: {
    backgroundColor: "#FFFFFF", // Achtergrondkleur van het tekstvlak
    borderRadius: 10, // Ronde hoeken
    padding: 20, // Binnenruimte
    elevation: 3, // Schaduw voor Android
    shadowColor: "#000", // Schaduwkleur voor iOS
    shadowOffset: { width: 0, height: 2 }, // Schaduw offset
    shadowOpacity: 0.3, // Schaduw transparantie
    shadowRadius: 4, // Schaduw radius
  },
  text: {
    fontSize: 16, // Lettergrootte
    color: "#000", // Tekstkleur
    textAlign: "left", // Links uitgelijnde tekst
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  tableWrapper: {
    marginBottom: 10, // Tussenruimte onder de tabel
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  table: {
    marginBottom: 10, // Tussenruimte onder de tabel
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tableRow: {
    fontSize: 16,
    alignContent: "space-between",
  },
});
