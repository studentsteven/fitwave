import "@/global.css";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import Button from "@/components/Button";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw">
        <View>
          <Text>Dag, Maand, Jaar</Text>
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative"
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  insideContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 30
  },

  white: {
    color: "white",
  },
});