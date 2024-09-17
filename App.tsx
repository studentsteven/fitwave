import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from "./components/ui/heading";
import { Image } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View>
        
        <View style={styles.nav}>
          <Heading size="5xl" style={styles.heading}>Fitwave</Heading>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://media.licdn.com/dms/image/v2/D4E03AQFjCU2kJviPyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708070941708?e=1732147200&v=beta&t=d0g3gVL9XNIr-LKvJj08J3jGWvbMEVbECSAZA6_ak3Y',
            }}
          />
        </View>

        <View style={styles.chooseType}>
          <Text onPress={() => alert("week")} style={styles.white}>Week</Text>
          <Text onPress={() => alert("maand")} style={styles.white}>Maand</Text>
          <Text onPress={() => alert("jaar")} style={styles.white}>Jaar</Text>
        </View>

      </View>

      <View style={styles.footer}>
        <Text onPress={() => alert("test")}>Footer</Text>
      </View>

    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#3EB1C8",
    padding: 15,
    paddingTop: 35,
  },
  heading: {
    color: "white"
  },
  account: {
    borderRadius: 9999,
    backgroundColor: "#ffffff",
    height: 40,
    width: 40
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 9999
  },
  chooseType: {
    backgroundColor: "#5D5D5D",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 12
  },
  white: {
    color: "white"
  },
  footer: {
    backgroundColor: "#D9D9D9",
    position: "absolute",
    bottom: 0,
    padding: 12,
    width: "100%"
  }
});
