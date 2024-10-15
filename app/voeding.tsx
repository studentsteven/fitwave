import Button from "@/components/Button";
import Navigation from "@/components/navigation/Navigation";
import CircularProgress from "@/components/Progress";
import "@/global.css";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { useUserData } from "@/components/useUserData";
import { router } from "expo-router";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [calories, setCalories] = useState('');
  const [caloriesName, setCaloriesName] = useState('');
  const [calItems, setCalItems] = useState([]);

  const { username, email, userId } = useUserData();


  const addCalDb = async (event) => {
    event.preventDefault();

    const response = await fetch('https://www.fitwave.stevenem.nl/cal_toevoegen?apiKey=We<3Fitwave', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        name: caloriesName,
        calories: calories
      })
    });

    const json = await response.json();
    
    if (json.message) {
      alert(json.message);
      router.push('/voeding'); // Navigeren naar 'voeding'
    }
  }
  
  useEffect(() => {
    const getCals = async () => {
      if (!userId) return; // Wacht tot userId beschikbaar is
  
      try {
        const response = await fetch('https://www.fitwave.stevenem.nl/cal?apiKey=We<3Fitwave', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: userId,
          }),
        });
  
        const data = await response.json();
  
        if (Array.isArray(data)) { // Check of het antwoord een array is
          setCalItems(data);
        } else {
          console.log("API response is not an array:", data);
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };
  
    getCals();
  }, [userId]); // Voeg userId toe als dependency
  

  var count = 1;

  return (
    <Navigation
      background="https://www.hivvereniging.nl/images/2017/05/19_ad_gezonde_voeding.jpg"
      title="Voeding"
    >
      <View style={styles.container}>
        <CircularProgress
          value={2000}
          valuetext="calorieën"
          max={2500}
          circlesize={200}
          strokeWidth={10}
          BGcolor={"#e6e6e6"}
          colorStroke={"#ff6347"}
        />
        <View style={styles.voedingsbox}>
          <Text style={styles.boxtitel}>Voedingslijst</Text>
          <ScrollView>
            {calItems.map((item) => (
              <View key={item.id} style={styles.lijstcomponent}>
                <Text style={styles.tekstcomponent}>
                  {count++} | {item.name}
                </Text>
                <Text style={styles.tekstcomponent}>{item.calories_number} cal</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.topModal}>
                <Text style={{ fontSize: 16 }}>Calorieën toevoegen</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    style={styles.closeButton}
                    source={{
                      uri: "https://img.icons8.com/ios7/600/delete-sign.png",
                    }}
                  />
                </Pressable>
              </View>
              <TextInput
                placeholder="Naam"
                style={[styles.input, { marginTop: 12 }]}
                value={caloriesName}
                onChangeText={(text) => setCaloriesName(text)}
              />
              <TextInput
                placeholder="Aantal Calorieën"
                keyboardType="numeric"
                style={[styles.input, { marginTop: 12, marginBottom: 12 }]}
                value={calories}
                onChangeText={(text) => setCalories(text)}
              />
              <Button
                text="Toevoegen"
                pressFunc={addCalDb}
              />
            </View>
          </View>
        </Modal>

        <Button
          pressFunc={() => setModalVisible(true)}
          text="Calorieën toevoegen"
        />
      </View>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    width: "100%",
    elevation: 24,
    borderColor: "#D9D9D9",
    borderWidth: 1,
  },
  topModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    width: 30,
    height: 30,
  },
  container: { display: "flex", gap: 20 },
  voedingsbox: {
    backgroundColor: "#4DBBCF",
    padding: 7,
    borderRadius: 10,
    height: 220,
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
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    color: "black",
    padding: 10,
  },
});
