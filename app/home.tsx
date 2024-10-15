import Bol from "@/components/navigation/Bol";
import Navigation from "@/components/navigation/Navigation";
import CircularProgress from "@/components/Progress";
import { useUserData } from "@/components/useUserData";
import "@/global.css";
import { useRouter } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const { username, email, userId } = useUserData();
  const array = ["Ma", "Di", "Wo", "Do", "Vr"];
  const color = ["#4DBBCF", "#4DBBCF", "#e6e6e6", "#e6e6e6", "#4DBBCF"];
  const screenWidth = Dimensions.get("window").width - 50;
  const router = useRouter();

  const LeaderBordHome = [
    { id: 1, name: "Wim", punten: 700 },
    { id: 2, name: "Henk", punten: 95 },
    { id: 3, name: `${username} (U)`, punten: 285 },
    { id: 4, name: "Willem", punten: 150 },
    { id: 5, name: "Frank", punten: 210 },
  ];

  return (
    <Navigation
      background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw"
      title="FitWave"
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.vijfText}>Laatste 5 dagen</Text>
          <Bol days={[array]} color={color}></Bol>
        </View>

        <View style={[styles.progressBox, { width: screenWidth }]}>
          <CircularProgress
            value={5842}
            valuetext="Stappen"
            max={10000}
            circlesize={145}
            strokeWidth={10}
            BGcolor={"#e6e6e6"}
            colorStroke={"#76B729"}
          />
          <CircularProgress
            value={2000}
            valuetext="Calorieën"
            max={2500}
            circlesize={145}
            strokeWidth={10}
            BGcolor={"#e6e6e6"}
            colorStroke={"#ff6347"}
          />
        </View>

        <View style={styles.LeaderBox}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.boxtitel}>Leaderboard</Text>
            <TouchableOpacity onPress={() => router.push("/leaderboard")}>
              <Text style={styles.meer}> {">"}</Text>
            </TouchableOpacity>
          </View>
          {LeaderBordHome.map((item) => (
            <View key={item.id} style={styles.lijstcomponent}>
              <Text style={styles.tekstcomponent}>
                {item.id} | {item.name}
              </Text>
              <Text style={styles.tekstcomponent}>{item.punten}</Text>
            </View>
          ))}
        </View>
      </View>
    </Navigation>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  vijfText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  progressBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  meer: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  LeaderBox: {
    backgroundColor: "#4DBBCF",
    padding: 7,
    borderRadius: 10,
    height: 220,
    width: "100%",
    overflow: "hidden",
  },
  boxtitel: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  lijstcomponent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 4,
    padding: 5,
    marginVertical: 2.5,
  },
  tekstcomponent: {
    color: "white",
  },
});
