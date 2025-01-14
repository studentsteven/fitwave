import Button from "@/components/Button";
import Navigation from "@/components/navigation/Navigation";
import CircularProgress from "@/components/Progress";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://tapoutdrinks.com/wp-content/uploads/2021/03/beautiful-fit-people-working-out-in-gym-together-NH4EV43.jpg"
        title="Workout"
      >
        <View style={styles.container}>
          <CircularProgress
            value={"12"}
            valuetext={"Kilometer"}
            max={"30"}
            circlesize={150}
            strokeWidth={10}
            BGcolor={"#e6e6e6"}
            colorStroke={"#ff6347"}
          />

          <Text style={styles.badgeText}>Nog 18 kilometer voor een badge!</Text>

          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1435/1435715.png",
            }}
            style={styles.badgeImage}
          />
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
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "10%",
  },
  badgeText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  badgeImage: {
    width: 70,
    height: 70,
  },
  button: {
    backgroundColor: "#4DBBCF",
    padding: 5,
    borderRadius: 10,
    width: "60%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  test: {
    alignItems: "center",
  },
});
