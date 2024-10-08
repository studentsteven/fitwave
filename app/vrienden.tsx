import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useUserData } from "@/components/useUserData";
import Navigation from "@/components/navigation/Navigation";
import { Text, Image } from "react-native";
import { useEffect, useState } from "react";
import moment from "moment";
import { router } from "expo-router";
import Button from "@/components/Button";

export default function Vrienden() {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);

  const [usernameFriend, setUsernameFriend] = useState("");

  const { username, email, userId } = useUserData();

  const sendRequest = async (event) => {
    event.preventDefault();

    const response = await fetch('https://www.fitwave.stevenem.nl/send_friend_request?apiKey=We<3Fitwave', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usernameFriend,
        req_user_id: userId
      })
    });

    const json = await response.json();
    
    if (json.message) {
      alert(json.message);
    } else {
      alert(json.message);
    }
  }

  const acceptFriend = async (id: number) => {
    try {
      const response = await fetch('https://www.fitwave.stevenem.nl/accept_friend?apiKey=We<3Fitwave', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          friendReqId: id
        }),
      });

      const json = await response.json();

      if(json.message) {
        alert(json.message);
        router.push('/vrienden'); // Navigeren naar 'vrienden'
      }
    } catch (error) {
      console.log(error);
    }
  }

const declineFriend = async (id: number) => {
  try {
    const response = await fetch('https://www.fitwave.stevenem.nl/decline_friend?apiKey=We<3Fitwave', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        friendReqId: id
      }),
    });

    const json = await response.json();

    if(json.message) {
      alert(json.message);
      router.push('/vrienden'); // Navigeren naar 'vrienden'
    }
  } catch (error) {
    console.log(error);
  }
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
        setFriends(data);
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

    useEffect(() => {
      const fetchFriendRequests = async () => {
        try {
          const response = await fetch('https://www.fitwave.stevenem.nl/friendrequests?apiKey=We<3Fitwave', {
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
            setFriendRequests(data);
          } else {
            console.log("API response is not an array:", data);
          }
        } catch (error) {
          console.log("Fetch error:", error);
        }
      };

      if (userId) { // Voeg een controle toe om te zorgen dat userId bestaat
        fetchFriendRequests();
      }
    }, [userId]);

      return (
          <Navigation title="Vrienden" background="https://media.nu.nl/m/do0x2aual01p_wd1280/waarom-vrienden-maken-in-een-nieuwe-omgeving-belangrijk-is.jpg">
            {friendRequests.map((item, key) => (
              <View style={styles.friendCard} key={key}>
                <Image
                  style={styles.pf}
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                  }}
                />
                <View>
                  <Text style={{color: "white", fontWeight: "bold"}}>{ item.username1 == username ? item.username2 : item.username1 }</Text>
                  <Text style={{color: "white"}}>Verstuurd op: {  moment(item.sended).format('DD-MM-YYYY HH:mm')  }</Text>
                </View>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                <Pressable onPress={() => acceptFriend(item.id)} style={[styles.button, {backgroundColor: "#76B729"}]}>
                  <Image
                      style={{ height: "100%", width: "100%"}}
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/33/33281.png",
                      }}
                    />
                  </Pressable>

                  <Pressable onPress={() => declineFriend(item.id)} style={[styles.button]}>
                    <Image
                      style={{ height: "100%", width: "100%" }}
                      source={{
                        uri: "https://pngpix.com/images/hd/black-cross-symbol-9bm61r59h46bdsme.jpg",
                      }}
                    />
                  </Pressable>
                </View>
              </View>
            ))}

            { friendRequests.length > 0 ? <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 12 }} /> : null}

            {friends.map((item, key) => (
              <View style={styles.friendCard} key={key}>
                <Image
                  style={styles.pf}
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                  }}
                />
                <View>
                  <Text style={{color: "white", fontWeight: "bold"}}>{ item.username1 == username ? item.username2 : item.username1 }</Text>
                  <Text style={{color: "white"}}>Vrienden sinds: {  moment(item.sended).format('DD-MM-YYYY HH:mm')  }</Text>
                </View>
              </View>
            ))}

            {friends.length < 1 ? <Text>Op dit moment heb je nog geen vrienden.</Text> : null}

            <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 12 }} />
            
            <Text style={{marginBottom: 10,}}>Verzend een vriendschapsverzoek:</Text>

            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#000"
              autoCapitalize="none"
              value={usernameFriend}
              onChangeText={setUsernameFriend}
            />
            <Button text="Verzenden" pressFunc={sendRequest} />
          </Navigation>
      );
  }

const styles = StyleSheet.create({
  friendCard: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    alignItems: "center",
    backgroundColor: "#4DBBCF",
    padding: 12,
    borderRadius: 12,
    gap: 10,
    marginVertical: 8,
  },
  pf: {
    borderRadius: 9999,
    height: 50,
    width: "auto",
    aspectRatio: "1/1"
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 999999999,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 12,
    color: "black",
    padding: 10,
  }
});