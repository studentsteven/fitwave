import Button from "@/components/Button";
import Navigation from "@/components/navigation/Navigation";
import CircularProgress from "@/components/progress";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { StyleSheet, View, Text, Image } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://tapoutdrinks.com/wp-content/uploads/2021/03/beautiful-fit-people-working-out-in-gym-together-NH4EV43.jpg"
        title="Workout"
      >
        <View style={styles.container}>
          <CircularProgress value={'12'} valuetext={'Kilometer'} max={'30'} circlesize={150} />
          
          {/* Tekst voor "Nog 18 kilometer voor een badge!" */}
          <Text style={styles.badgeText}>Nog 18 kilometer voor een badge!</Text>

          {/* Image veld voor de badge */}
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1435/1435715.png' }}  // Voeg hier de link van je badge toe
            style={styles.badgeImage}
          />

          {/* Button */}
        </View>
        <View style={styles.test}>
            <View style={styles.button}>
              <Button text="Workout!" link="/workoutPlan" />
            </View>
          </View>
      </Navigation>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  badgeText: {
    fontSize: 16,   // Aangepaste grootte voor de tekst
    color: '#000',
    fontWeight: 'bold',
  },
  badgeImage: {
    width: 70,  // Breedte van de afbeelding
    height: 70,  // Hoogte van de afbeelding
    marginBottom: 100,
  },
  button: {
    backgroundColor: "#4DBBCF",
    padding: 5,
    borderRadius: 10,
    width: '60%',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  test: {
    alignItems: 'center'
  }
});
