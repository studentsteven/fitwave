import Button from "@/components/Button";
import Navigation from "@/components/navigation/Navigation";
import CircularProgress from "@/components/Progress";
import "@/global.css";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Modal, Alert, Pressable, Image, TextInput } from "react-native";

export default function App() {
  const foodItems = [
    { id: 1, name: "Broodje Kroket", calories: 700 },
    { id: 2, name: "Appel", calories: 95 },
    { id: 3, name: "Pizza", calories: 285 },
    { id: 4, name: "Salade", calories: 150 },
    { id: 5, name: "Chocolade", calories: 210 },
    { id: 6, name: "Pasta", calories: 400 },
    { id: 7, name: "Banaan", calories: 105 },
    { id: 8, name: "Yoghurt", calories: 150 },
    { id: 9, name: "Noten", calories: 600 },
    { id: 10, name: "Muesli", calories: 200 },
  ];

  const [modalVisible, setModalVisible] = useState(false);

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
            {foodItems.map((item) => (
              <View key={item.id} style={styles.lijstcomponent}>
                <Text style={styles.tekstcomponent}>
                  {item.id} | {item.name}
                </Text>
                <Text style={styles.tekstcomponent}>{item.calories} cal</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <Modal 
          animationType="slide" 
          transparent={true} visible={modalVisible} 
          onDismiss={() => setModalVisible(false)} 
          onRequestClose={() => { setModalVisible(!modalVisible); }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.topModal}>
                <Text style={{fontSize: 16}}>Calorieën toevoegen</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image style={styles.closeButton} source={{ uri: 'https://img.icons8.com/ios7/600/delete-sign.png',}}/>
                </Pressable>
              </View>
              
              <TextInput placeholder="Naam" style={[styles.input, {marginTop: 12}]} />
              <TextInput placeholder="Aantal Calorieën" style={[styles.input, {marginTop: 12, marginBottom: 12}]} />

              <Button text="Toevoegen" pressFunc={() => setModalVisible(!modalVisible)} />

            </View>
          </View>
        </Modal>

        <Button pressFunc={() => setModalVisible(true)} text="Calorieën toevoegen" />
      </View>
    </Navigation>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    width: "100%",
    elevation: 24,
    borderColor: "#D9D9D9",
    borderWidth: 1
  },
  topModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  closeButton: {
    width: 30,
    height: 30
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
