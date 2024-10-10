import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { ScrollView, StyleSheet, Text, View } from "react-native"; // Importeer ScrollView en ImageBackground

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://tapoutdrinks.com/wp-content/uploads/2021/03/beautiful-fit-people-working-out-in-gym-together-NH4EV43.jpg"
        title="Bulken"
      >
        <View style={styles.container}>
          {/* Scrollbare tekst */}
          <ScrollView style={styles.scrollView}>
            <View style={styles.textBox}>
              <Text style={styles.text}>
                <Text style={styles.header}>
                  Jouw Workout Routine voor Bulken en Spiergroei
                </Text>
                {"\n\n"}
                Klaar om serieus spiermassa op te bouwen en sterker te worden?
                Deze workout routine is specifiek ontworpen voor spiergroei en
                bulken. Volg dit plan vier tot vijf dagen per week om maximale
                spierontwikkeling te bereiken. Vergeet niet om voldoende te eten
                en te rusten, want spiergroei gebeurt niet alleen in de
                sportschool, maar ook tijdens het herstel!
                {"\n\n"}
                <Text style={styles.subHeader}>Frequentie:</Text> 4-5 dagen per
                week
                {"\n"}
                <Text style={styles.subHeader}>Duur:</Text> 60-90 minuten per
                sessie
                {"\n\n\n\n"}
                <Text style={styles.subHeader}>
                  Dag 1: Krachttraining (Borst & Triceps)
                </Text>
                {"\n\n"}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                {"\n"}
                Begin met een opwarming zoals licht cardio of dynamisch rekken
                om je spieren voor te bereiden.
                {"\n\n"}
                <Text style={styles.subHeader}>
                  Krachttraining (4 sets per oefening)
                </Text>
                {"\n\n"}
                {/* Tabel met oefeningen */}
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Oefening</Text>
                  <Text style={styles.tableHeader}>Herhalingen</Text>

                  <Text style={styles.tableRow}>Bench Press</Text>
                  <Text style={styles.tableRow}>15-20</Text>
                  <Text style={styles.tableRow}>Push-ups</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Incline Dumbbell Press</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Chest Flyes (met kabels)</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Tricep Dips</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Close-grip Bench Press</Text>
                  <Text style={styles.tableRow}>8-10</Text>
                </View>
                {"\n\n"}
                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                {"\n"}
                Sluit af met lichte stretching voor je borst en triceps om de
                flexibiliteit te verbeteren.
                {"\n\n\n\n"}
                <Text style={styles.subHeader}>Dag 2: Rug & Biceps</Text>
                {"\n\n"}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                {"\n"}
                Begin met een lichte opwarming, zoals een roeimachine om je rug
                en biceps op te warmen.
                {"\n\n"}
                <Text style={styles.subHeader}>
                  Krachttraining (4 sets per oefening)
                </Text>
                {"\n"}
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Oefening</Text>
                  <Text style={styles.tableHeader}>Herhalingen</Text>

                  <Text style={styles.tableRow}>Deadlifts</Text>
                  <Text style={styles.tableRow}>15-20</Text>
                  <Text style={styles.tableRow}>Push-ups</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Pull-ups</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Barbell Rows</Text>
                  <Text style={styles.tableRow}>30-35</Text>
                  <Text style={styles.tableRow}>Dumbbell Curls</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Hammer Curls</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                </View>
                {"\n\n"}
                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                Doe een paar minuten lichte stretching voor je rug en biceps.
                {"\n\n\n\n"}
                <Text style={styles.subHeader}>
                  Dag 3: Rust of Actieve Herstel
                </Text>
                {"\n"}
                Neem een rustdag of kies voor een actieve herstelactiviteit
                zoals lichte cardio, stretching of yoga. Dit helpt je lichaam te
                herstellen en sterker te worden voor de volgende sessies.
                {"\n\n\n\n"}
                <Text style={styles.subHeader}>Dag 4: Benen & Schouders</Text>
                {"\n\n"}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                {"\n"}
                Voer een korte warming-up uit, zoals fietsen of lunges, om je
                benen en schouders voor te bereiden.
                {"\n\n"}
                <Text style={styles.subHeader}>
                  Krachttraining (4 sets per oefening)
                </Text>
                {"\n"}
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Oefening</Text>
                  <Text style={styles.tableHeader}>Herhalingen</Text>

                  <Text style={styles.tableRow}>Squats</Text>
                  <Text style={styles.tableRow}>8-10</Text>
                  <Text style={styles.tableRow}>Lunges</Text>
                  <Text style={styles.tableRow}>10-12 per been</Text>
                  <Text style={styles.tableRow}>Leg Press</Text>
                  <Text style={styles.tableRow}>8-10</Text>
                  <Text style={styles.tableRow}>Shoulder Press</Text>
                  <Text style={styles.tableRow}>8-10</Text>
                  <Text style={styles.tableRow}>Lateral Raises</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                </View>
                {"\n\n"}
                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                {"\n\n"}
                Zorg voor voldoende cooling-down met stretching voor je benen en
                schouders.
                {"\n\n"}
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
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    width: "100%",
  },
  textBox: {
    backgroundColor: "#FFFFFF",
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
    alignItems: "center", // Gecentreerd
    justifyContent: "center",
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tableRow: {
    fontSize: 16,
    alignContent: "space-between",
  },
  table: {
    marginBottom: 10, // Tussenruimte onder de tabel
  },
});
