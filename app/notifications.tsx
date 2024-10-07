import Navigation from "@/components/navigation/Navigation";
import "@/global.css";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const notifications = [
    { id: 1, name: "Pieter" },
    { id: 2, name: "Hans" },
    { id: 3, name: "Nico" },
    { id: 4, name: "Toeradev" },
    { id: 5, name: "Stevenem" },
    { id: 6, name: "Jan" },
    { id: 7, name: "Henk" },
    { id: 8, name: "Donald Trump" },
    { id: 9, name: "Mark Rutte" },
  ];

  const router = useRouter();

  const tofriends = () => {
    router.push("/vrienden");
  };

  return (
    <Navigation
      background="https://www.athenas.nl/wp-content/uploads/voeding-thema-athenas.jpg"
      title="Notificaties"
    >
      <ScrollView>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notibox}>
            <Image
              style={styles.pf}
              source={{
                uri: "https://www.autismeexpertise.nl/wp-content/uploads/2019/02/profielfoto.png",
              }}
            />
            <View style={styles.text}>
              <Text style={styles.notitext}>
                <Text style={{ fontWeight: "bold" }}>{notification.name}</Text>
                <Text> wil vrienden met je worden</Text>
              </Text>
            </View>
            <Pressable onPress={tofriends}>
              <Text style={styles.meer}>{">"}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  notibox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#4DBBCF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  notitext: {
    color: "white",
  },
  text: {
    // display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    width: "80%",
  },
  naam: {
    fontWeight: "bold",
    color: "white",
  },
  meer: {
    color: "white",
    marginLeft: "auto",
  },
  pf: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
});
