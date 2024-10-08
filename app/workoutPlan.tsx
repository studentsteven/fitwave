import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useRouter } from "expo-router";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const router = useRouter(); // Hook voor navigatie

  // Workout opties die worden weergegeven
  const workoutOptions = [
    { id: '1', title: 'Afvallen', link: '/workouts/Afvallen', achtergrond: 'https://olimpsport.com/media/mageplaza/blog/post/image//w/y/wyprobuj-5-najlepszych-cwiczen-cardio-na-silowni_5.jpg' }, // Voeg de link toe aan de optie
    { id: '2', title: 'Bulken', link: '/workouts/Bulken', achtergrond: 'https://img.freepik.com/premium-photo/fitness-trained-muscular-guy-working-out-gym-strong-training-concept-photo_116317-36249.jpg'},
    { id: '3', title: 'Gezondheid', link: '/workouts/Gezondheid', achtergrond: 'https://gezondnu.nl/content/uploads/2021/10/202015.gezondnu-bewegen-maakt-gelukkig-scaled-1.jpg' },
  ];

  // Render elke workout-optie als een knop die leidt naar een nieuwe pagina
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => router.push(item.link)}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: item.achtergrond }}
        style={styles.background}
        imageStyle={{ opacity: 1 }} // Pas de opacity alleen toe op de afbeelding
      >
        <View style={styles.overlayContent}>
          <Text style={styles.listItemText}>{item.title}</Text>
          <Text style={styles.listItemArrow}>➤</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  
  return (
    <GluestackUIProvider mode="light">
      <Navigation
        background="https://tapoutdrinks.com/wp-content/uploads/2021/03/beautiful-fit-people-working-out-in-gym-together-NH4EV43.jpg"
        title="Workout"
      >
        <View style={styles.container}>
          <FlatList
            data={workoutOptions}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.list}
          />
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  list: {
    width: '100%',
    marginTop: 10,
  },

  listItemText: {
    fontSize: 20,
    color: '#fff', // Zorg dat de tekst wit is zodat het beter leesbaar is tegen een donkere achtergrond
    fontWeight: 'bold',
    marginBottom: 0,
  },
  listItemArrow: {
    fontSize: 24,
    color: '#fff', // Zelfde voor de pijl
  },
  background: {
    width: "100%",
    height: 160,
    justifyContent: "center",
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    height: 140,
  },
  overlayContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'transparent', // Zorg dat de overlay transparant is zodat deze geen opacity overneemt
    width: '100%',
    height: '100%',
  },
});
