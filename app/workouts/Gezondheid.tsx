import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native"; // Importeer ScrollView en ImageBackground
import { Video } from 'expo-av'; // Importeer de Video component van expo-av

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/02/cardioworkout-770x553.jpg"
        title="Workout"
      >
        <View style={styles.container}>
          {/* Scrollbare tekst */}
          <ScrollView style={styles.scrollView}>
            <View style={styles.textBox}>
              <Text style={styles.text}>
                
                <Text style={styles.header}>Jouw Workout Routine voor Betere Gezondheid</Text>
                {'\n\n'}
                Deze routine is ontworpen om je algemene gezondheid en welzijn te verbeteren. Het bevat een mix van krachttraining, cardiovasculaire oefeningen, flexibiliteit en herstel. Volg deze routine drie tot vier keer per week om je fitheid te verbeteren, je energie te verhogen en je gezondheid te ondersteunen!
                {'\n\n'}
                
                <Text style={styles.subHeader}>Frequentie:</Text> 3-4 dagen per week
                {'\n'}
                <Text style={styles.subHeader}>Duur:</Text> 45-60 minuten per sessie
                {'\n\n'}
                
                <Text style={styles.subHeader}>Dag 1: Full Body Workout</Text>
                {'\n\n'}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                {'\n'}
                Begin met een lichte cardiovasculaire opwarming zoals fietsen, wandelen of touwtjespringen.
                {'\n\n'}
                
                <Text style={styles.subHeader}>Krachttraining en Cardiovasculair (3 sets)</Text>
                {'\n\n'}

                {/* Tabel voor Full Body workout */}
                <View style={styles.tableWrapper}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Oefening</Text>
                    <Text style={styles.tableHeader}>Herhalingen</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Squats</Text>
                    <Text style={styles.tableCell}>12-15</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Push-ups</Text>
                    <Text style={styles.tableCell}>10-12</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Lunges (per been)</Text>
                    <Text style={styles.tableCell}>12</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Plank</Text>
                    <Text style={styles.tableCell}>30-60 sec</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Jumping Jacks</Text>
                    <Text style={styles.tableCell}>30 sec</Text>
                  </View>
                </View>

                {'\n\n'}
                
                

                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                Eindig met rekken voor de belangrijkste spiergroepen, zoals de benen, rug en schouders.
                {'\n\n'}

                <Text style={styles.subHeader}>Dag 2: Cardiovasculaire Training en Core</Text>
                {'\n'}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                Begin met een lichte activiteit zoals wandelen of joggen om je hartslag te verhogen.
                {'\n\n'}

                <Text style={styles.subHeader}>Cardio Circuit (3 sets)</Text>
                {'\n'}
                Voer de volgende oefeningen uit zonder pauzes tussen de oefeningen. Rust 1 minuut na elke set.
                {'\n\n'}

                {/* Tabel voor Cardio Circuit */}
                <View style={styles.tableWrapper}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Oefening</Text>
                    <Text style={styles.tableHeader}>Tijd/Herhalingen</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Sprint op plaats</Text>
                    <Text style={styles.tableCell}>30 sec</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Mountain Climbers</Text>
                    <Text style={styles.tableCell}>30 sec</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>High Knees</Text>
                    <Text style={styles.tableCell}>30 sec</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Bicycle Crunches</Text>
                    <Text style={styles.tableCell}>12-15</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Russian Twists</Text>
                    <Text style={styles.tableCell}>20</Text>
                  </View>
                </View>

                {'\n\n'}

               

                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                {'\n'}
                Stretch je buikspieren en onderrug.
                {'\n\n'}

                <Text style={styles.subHeader}>Dag 3: Flexibiliteit en Mobiliteit</Text>
                {'\n'}
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                Begin met lichte dynamische stretches zoals armcirkels en beenzwaaien.
                {'\n\n'}

                <Text style={styles.subHeader}>Yoga en Stretching (3 sets)</Text>
                {'\n\n'}

                {/* Tabel voor Flexibiliteit en Mobiliteit */}
                <View style={styles.tableWrapper}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Oefening</Text>
                    <Text style={styles.tableHeader}>Tijd</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Downward Dog</Text>
                    <Text style={styles.tableCell}>30 sec</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Child's Pose</Text>
                    <Text style={styles.tableCell}>30 sec</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Cat-Cow Stretch</Text>
                    <Text style={styles.tableCell}>10 reps</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Seated Forward Bend</Text>
                    <Text style={styles.tableCell}>30 sec</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Hip Flexor Stretch</Text>
                    <Text style={styles.tableCell}>30 sec per been</Text>
                  </View>
                </View>

                {'\n\n'}
                
                

                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                {'\n'}
                Doe langzame ademhalingsoefeningen en volledige lichaamstretching.
                {'\n'}
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
  tableWrapper: {
    marginBottom: 10, // Tussenruimte onder de tabel
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '90%', // Breedte van de tabel
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  tableCell: {
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  background: {
    height: 200, // Hoogte van de foto
    marginBottom: 20, // Afstand onder de foto
    borderRadius: 10, // Maak de foto hoeken rond
    overflow: 'hidden', // Zorg dat inhoud niet buiten de randen komt
  },
});
