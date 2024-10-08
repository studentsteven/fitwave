import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
                
                <Text style={styles.header}>Jouw Workout Routine voor Spieropbouw (Bulken)</Text>
                
                <Text> Klaar om spiermassa te winnen en sterker te worden? Deze workout routine is speciaal ontworpen om je te helpen bulken, met een focus op krachttraining en progressieve overbelasting. Volg deze routine vier tot vijf dagen per week voor optimale spiergroei! </Text>
                
                
                <Text style={styles.subHeader}>Frequentie:</Text> <Text>4-5 dagen per week</Text>
                
                <Text style={styles.subHeader}>Duur:</Text> <Text>60-75 minuten per sessie</Text>
                
                
                <Text style={styles.subHeader}>Dag 1: Krachttraining (Upper Body)</Text>
                
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                
                <Text>Begin met een lichte opwarming zoals 5 minuten fietsen of lopen op een loopband.</Text>
                
                
                <Text style={styles.subHeader}>Krachttraining (4 sets)</Text>
                

                <View style={styles.tableWrapper}>
                  <View style={styles.tableRow}>
                    <Text style={styles.titel}>Oefening </Text>
                    <Text style={styles.titel}>herhalingen</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Bench Press</Text>
                    <Text style={styles.tableCell}>6-8</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Pull-ups</Text>
                    <Text style={styles.tableCell}>6-8</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Incline Dumbbell Press</Text>
                    <Text style={styles.tableCell}>8-10</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Barbell Rows</Text>
                    <Text style={styles.tableCell}>6-8</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Dumbbell Shoulder Press</Text>
                    <Text style={styles.tableCell}>8-10</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Tricep Pushdowns</Text>
                    <Text style={styles.tableCell}>10-12</Text>
                  </View>
                </View>

                
                
              

                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                <Text>Eindig met rekken voor de bovenste spieren, zoals borst, schouders en armen.</Text>
                
                
                <Text style={styles.subHeader}>Dag 2: Krachttraining (Lower Body)</Text>
                
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                <Text>Begin met lichte squats of een korte warming-up op de fiets om je benen op te warmen.</Text>
                
                
                <Text style={styles.subHeader}>Krachttraining (4 sets)</Text>

                <View style={styles.tableWrapper}>
                  <View style={styles.tableRow}>
                    <Text style={styles.titel}>Oefening</Text>
                    <Text style={styles.titel}>Herhalingen</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Squats</Text>
                    <Text style={styles.tableCell}>6-8</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Deadlifts</Text>
                    <Text style={styles.tableCell}>5-6</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Leg Press</Text>
                    <Text style={styles.tableCell}>8-10</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Lunges</Text>
                    <Text style={styles.tableCell}>8 per been</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Calf Raises</Text>
                    <Text style={styles.tableCell}>12-15</Text>
                  </View>
                </View>

                

                
                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                <Text>Stretch je hamstrings, quadriceps en kuiten om de flexibiliteit te behouden.</Text>
                

                <Text style={styles.subHeader}>Dag 3: Rust of Actieve Herstel</Text>
                <Text>Neem een rustdag of voer een lichte activiteit uit zoals wandelen of zwemmen om de spieren te laten herstellen en groeiprocessen te ondersteunen.</Text>
                

                <Text style={styles.subHeader}>Dag 4: Krachttraining (Push Focus)</Text>
                
                <Text style={styles.subHeader}>Opwarming (5-10 minuten)</Text>
                <Text>Doe een korte opwarming, zoals lichte push-ups of schouderrotaties.</Text>
                
                
                <Text style={styles.subHeader}>Push Dag (4 sets)</Text>

                <View style={styles.tableWrapper}>
                  <View style={styles.tableRow}>
                    <Text style={styles.titel}>Oefening</Text>
                    <Text style={styles.titel}>herhalingen</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Bench Press</Text>
                    <Text style={styles.tableCell}>6-8</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Overhead Press</Text>
                    <Text style={styles.tableCell}>6-8</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Dips</Text>
                    <Text style={styles.tableCell}>8-10</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Dumbbell Lateral Raises</Text>
                    <Text style={styles.tableCell}>10-12</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Tricep Pushdowns</Text>
                    <Text style={styles.tableCell}>10-12</Text>
                  </View>
                </View>
                
                
                
                

                <Text style={styles.subHeader}>Afkoelen (5-10 minuten)</Text>
                
                <Text>Stretch je borstspieren en triceps om spanning los te laten na je training.</Text>
                
            </View>
          </ScrollView>
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // // flex: 1,
    // display: 'flex',
    // alignItems: 'center',
    // backgroundColor: '#f5f5f5',
  },
  scrollView: {
    // width: '100%', // Zorg dat de ScrollView de volledige breedte heeft
  },
  textBox: {
    backgroundColor: '#FFFFFF', // Achtergrondkleur van het tekstvlak
    borderRadius: 10, // Ronde hoeken
    // padding: 20, // Binnenruimte
    elevation: 3, // Schaduw voor Android
    shadowColor: '#000', // Schaduwkleur voor iOS
    shadowOffset: { width: 0, height: 2 }, // Schaduw offset
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#000',
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
  },

  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableCell: {
    fontSize: 16,
  },
});
