import Navigation from "@/components/navigation/Navigation";
import { useUserData } from "@/components/useUserData";
import "@/global.css";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [notifications, setNotifications] = useState([]);
  const { username, email, userId } = useUserData();

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const response = await fetch(
          "https://www.fitwave.stevenem.nl/friendrequests?apiKey=We<3Fitwave",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userId,
            }),
          }
        );

        const data = await response.json();
        if (Array.isArray(data)) {
          // Check of het antwoord een array is
          setNotifications(data);
        } else {
          console.log("API response is not an array:", data);
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    if (userId) {
      // Voeg een controle toe om te zorgen dat userId bestaat
      fetchFriendRequests();
    }
  }, [userId]);

  const router = useRouter();

  const tofriends = () => {
    router.push("/vrienden");
  };

  return (
    <Navigation
      background="https://hsvdenhaag.nl/wp-content/uploads/2021/02/Klokkenluidersregeling-440x293.jpg"
      title="Notificaties"
    >
      <ScrollView>
        {notifications.map((notification) => (
          <Pressable
            onPress={tofriends}
            key={notification.id}
            style={styles.notibox}
          >
            <Image
              style={styles.pf}
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
              }}
            />
            <View style={styles.text}>
              <Text style={styles.notitext}>
                <Text style={{ fontWeight: "bold" }}>
                  {notification.username1 == username
                    ? notification.username2
                    : notification.username1}
                </Text>
                <Text> wil vrienden met je worden</Text>
              </Text>
            </View>
            <Text style={styles.meer}>{">"}</Text>
          </Pressable>
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
