import Navigation from "@/components/navigation/Navigation";
import { useUserData } from "@/components/useUserData";
import "@/global.css";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const { username, email, userId } = useUserData();
  const [typeO, setTypeO] = useState("vrienden");
  const [friendPlayers, setFriendPlayers] = useState([]);

  const allPlayers = [
    { id: 1, username: "Jan", punten: 38454 },
    { id: 2, username: "Kees", punten: 38454 },
    { id: 3, username: "Sophie", punten: 1000 },
    { id: 4, username: "Emma", punten: 1000000000000 },
    { id: 5, username: "Piet", punten: 210 },
    { id: 6, username: "Lars", punten: 130 },
    { id: 7, username: "Nina", punten: 200 },
    { id: 8, username: "Tom", punten: 160 },
    { id: 9, username: "Anna", punten: 180 },
    { id: 10, username: "Mark", punten: 240 },
    { id: 11, username: "Jesse", punten: 155 },
    { id: 12, username: "Olivia", punten: 165 },
    { id: 13, username: "Lucas", punten: 175 },
    { id: 14, username: "Sara", punten: 185 },
    { id: 15, username: "David", punten: 195 },
    { id: 16, username: "Maya", punten: 205 },
    { id: 17, username: "Finn", punten: 215 },
    { id: 18, username: "Isla", punten: 225 },
    { id: 19, username: "Bram", punten: 235 },
    { id: 20, username: "Lotte", punten: 245 },
    { id: 21, username: "Niels", punten: 140 },
    { id: 22, username: "Jade", punten: 170 },
    { id: 23, username: "Rick", punten: 150 },
    { id: 24, username: "Lana", punten: 160 },
    { id: 25, username: "Tygo", punten: 180 },
    { id: 26, username: "Yara", punten: 190 },
    { id: 27, username: "Milan", punten: 200 },
    { id: 28, username: "Chloe", punten: 210 },
    { id: 29, username: "Victor", punten: 220 },
    { id: 30, username: "Tess", punten: 230 },
    { id: 31, username: "Joris", punten: 240 },
    { id: 32, username: "Demi", punten: 250 },
    { id: 33, username: "Sven", punten: 155 },
    { id: 34, username: "Jill", punten: 165 },
    { id: 35, username: "Hugo", punten: 175 },
    { id: 36, username: "Lina", punten: 185 },
    { id: 37, username: "Stijn", punten: 195 },
    { id: 38, username: "Zoë", punten: 205 },
    { id: 39, username: "Pablo", punten: 215 },
    { id: 40, username: "Faye", punten: 225 },
    { id: 41, username: "Mats", punten: 235 },
    { id: 42, username: "Anouk", punten: 245 },
    { id: 43, username: "Quinn", punten: 150 },
    { id: 44, username: "Elin", punten: 160 },
    { id: 45, username: "Daan", punten: 170 },
    { id: 46, username: "Lia", punten: 180 },
    { id: 47, username: "Ruben", punten: 190 },
    { id: 48, username: "Sam", punten: 200 },
    { id: 49, username: "Timo", punten: 210 },
    { id: 50, username: "Iris", punten: 220 },
  ];

  const displayedPlayers = typeO === "vrienden" ? friendPlayers : allPlayers;

  var count = 1;

  var lastCount = 5000;
  function getRandomInt(max) {
    lastCount =  Math.floor(Math.random() * max);
    return lastCount;
  }
  
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('https://www.fitwave.stevenem.nl/friends?apiKey=We<3Fitwave', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              user_id: userId
          }),
        });
        const data = await response.json();
        if (Array.isArray(data)) { // Check of het antwoord een array is
          // console.log(data);\
          const ownData = {
            username1: username,
            username2: username
          }
          data.push(ownData);
          setFriendPlayers(data);
        } else {
          console.log("API response is not an array:", data);
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
  };
  
    if (userId) { // Voeg een controle toe om te zorgen dat userId bestaat
      fetchFriends();
    }
  }, [userId]);

  return (
    <Navigation
      background="https://images.westend61.de/0000049697pw/winners-podium-in-grass-field-TCF00518.jpg"
      title="Leaderboard"
    >
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setTypeO("vrienden")}>
            <Text style={[typeO === "vrienden" && styles.underline]}>
              Vrienden
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTypeO("iedereen")}>
            <Text style={[typeO === "iedereen" && styles.underline]}>
              Iedereen
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.voedingsbox}>
          <View style={styles.boxtitel}>
            <Text style={styles.voedingstitel}>Leaderboard</Text>
            <Text style={{ color: "white" }}>Punten</Text>
          </View>
          <ScrollView>
            {displayedPlayers.map((item) => (
              <View key={count} style={styles.lijstcomponent}>
                <Text style={styles.tekstcomponent}>
                  { count++} | { item.username1 == username ? item.username2 : item.username1 }
                  { item.username ? item.username : null }
                </Text>
                <Text style={styles.tekstcomponent}>
                  {getRandomInt(lastCount)}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  voedingsbox: {
    backgroundColor: "#4DBBCF",
    padding: 15,
    borderRadius: 10,
    height: "95%",
    overflow: "hidden",
  },
  boxtitel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  voedingstitel: {
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
  TypeSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  underline: {
    textDecorationLine: "underline",
  },
});
