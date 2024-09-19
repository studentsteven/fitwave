import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./components/navigation/Navigation";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation>

        <View style={styles.chooseType}>
          <Text onPress={() => alert("week")} style={styles.white}>Week</Text>
          <Text onPress={() => alert("maand")} style={styles.white}>Maand</Text>
          <Text onPress={() => alert("jaar")} style={styles.white}>Jaar</Text>
        </View>

      </Navigation>

    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  chooseType: {
    backgroundColor: "#5D5D5D",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
  },
  white: {
    color: "white"
  },
});