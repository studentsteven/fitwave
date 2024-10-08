import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native"; // Importeer ScrollView en ImageBackground
import { Video } from 'expo-av'; // Importeer de Video component van expo-av

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://tapoutdrinks.com/wp-content/uploads/2021/03/beautiful-fit-people-working-out-in-gym-together-NH4EV43.jpg"
        title="Workout"
      >
        <View style={styles.container}>
          {/* Scrollbare tekst */}
          <ScrollView style={styles.scrollView}>
            <View style={styles.textBox}>
              <Text style={styles.text}>
                
                <Text style={styles.header}>Jouw Workout Routine voor Gewichtsverlies</Text>
                {'\n\n'}
                Ben je klaar om die extra kilo's kwijt te raken en je fitnessdoelen te bereiken? Deze effectieve workout routine is speciaal ontworpen om je te helpen af te vallen, je uithoudingsvermogen te verbeteren en je algehele gezondheid te bevorderen. Volg deze routine vier tot vijf dagen per week en zie snel resultaat!
                {'\n\n'}
                
                <Text style={styles.subHeader}>Frequentie:</Text> 4-5 dagen per week
                {'\n'}
                <Text style={styles.subHeader}>Duur:</Text> 45-60 minuten per sessie
                {'\n\n'}
                
                <Text style={styles.subHeader}>Dag 1: Krachttraining (Full Body)</Text>
                {'\n\n'}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                {'\n'}
                Begin met een opwarming om je spieren voor te bereiden. Jog op de plaats of maak gebruik van een springtouw.
                {'\n\n'}
                
                <Text style={styles.subHeader}>Krachttraining (3 sets)</Text>
                {'\n\n'}
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Oefening</Text>
                  <Text style={styles.tableRow}>Squats</Text>
                  <Text style={styles.tableRow}>12-15</Text>
                  <Text style={styles.tableRow}>Push-ups</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Bent-over rows (met dumbbells)</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Lunges</Text>
                  <Text style={styles.tableRow}>12 per been</Text>
                  <Text style={styles.tableRow}>Plank (vasthouden)</Text>
                  <Text style={styles.tableRow}>30-60 sec</Text>
                  <Text style={styles.tableRow}>Deadlifts (met dumbbells)</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                </View>
                {'\n\n'}
                
                

                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                Sluit af met een paar minuten rekken om de spieren te ontspannen.
                {'\n\n'}
                
                <Text style={styles.subHeader}>Dag 2: Cardiotraining</Text>
                {'\n'}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                Wandel of jog rustig om je hartslag te verhogen.
                {'\n\n'}
                
                <Text style={styles.subHeader}>Intervaltraining (20-30 minuten)</Text>
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Intervaltype</Text>
                  <Text style={styles.tableHeader}>Activiteit</Text>
                  <Text style={styles.tableHeader}>Duur</Text>
                  <Text style={styles.tableRow}>Hoge intensiteit</Text>
                  <Text style={styles.tableRow}>Sprint of fietsen</Text>
                  <Text style={styles.tableRow}>30 sec</Text>
                  <Text style={styles.tableRow}>Lage intensiteit</Text>
                  <Text style={styles.tableRow}>Wandelen of rustig joggen</Text>
                  <Text style={styles.tableRow}>1-2 min</Text>
                </View>
                {'\n\n'}
                
              

                <Text style={styles.subHeader}>Cool down (5-10 minuten)</Text>
                Eindig met een rustige wandeling.
                {'\n\n'}

                <Text style={styles.subHeader}>Dag 3: Rust of Actieve Herstel</Text>
                Neem een rustdag of kies voor een actieve herstelactiviteit zoals yoga of een lichte wandeling. Dit helpt je lichaam te herstellen en voorbereid te zijn voor de volgende trainingssessie.
                {'\n\n'}

                <Text style={styles.subHeader}>Dag 4: Krachttraining (Circuit)</Text>
                {'\n'}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                Voer een korte opwarming uit om je spieren los te maken.
                {'\n\n'}
                
                <Text style={styles.subHeader}>Circuittraining (3 rondes)</Text>
                <View style={styles.table}>
                  <Text style={styles.tableHeader}>Oefening</Text>
                  <Text style={styles.tableHeader}>Herhalingen</Text>
                  <Text style={styles.tableRow}>Jumping Jacks</Text>
                  <Text style={styles.tableRow}>15-20</Text>
                  <Text style={styles.tableRow}>Push-ups</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Tricep Dips (op een bankje)</Text>
                  <Text style={styles.tableRow}>10-12</Text>
                  <Text style={styles.tableRow}>Mountain Climbers</Text>
                  <Text style={styles.tableRow}>30 sec</Text>
                  <Text style={styles.tableRow}>Bodyweight Squats</Text>
                  <Text style={styles.tableRow}>15-20</Text>
                  <Text style={styles.tableRow}>Russian Twists</Text>
                  <Text style={styles.tableRow}>15 per kant</Text>
                </View>
                {'\n\n'}
                
                

                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                {'\n\n'}
                Rek je spieren na de training om de flexibiliteit te verbeteren.
                {'\n\n'}
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
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Achtergrondkleur voor contrast
  },
  scrollView: {
    width: '100%', // Zorg dat de ScrollView de volledige breedte heeft
    padding: 10, // Binnenruimte voor ScrollView
  },
  textBox: {
    backgroundColor: '#FFFFFF', // Achtergrondkleur van het tekstvlak
    borderRadius: 10, // Ronde hoeken
    padding: 20, // Binnenruimte
    elevation: 3, // Schaduw voor Android
    shadowColor: '#000', // Schaduwkleur voor iOS
    shadowOffset: { width: 0, height: 2 }, // Schaduw offset
    shadowOpacity: 0.3, // Schaduw transparantie
    shadowRadius: 4, // Schaduw radius
  },
  text: {
    fontSize: 16, // Lettergrootte
    color: '#000', // Tekstkleur
    textAlign: 'left', // Links uitgelijnde tekst
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  table: {
    marginBottom: 10, // Tussenruimte onder de tabel
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableRow: {
    fontSize: 16,
    alignContent: "space-between"
  },
  tableStats: {
    fontSize: 16,
  },
  background: {
    height: 200, // Hoogte van de foto
    marginBottom: 20, // Afstand onder de foto
    borderRadius: 10, // Maak de foto hoeken rond
    overflow: 'hidden', // Zorg dat inhoud niet buiten de randen komt
  },
});
