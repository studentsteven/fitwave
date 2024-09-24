import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/navigation/Navigation";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw">
        <View>
          <Text>hallo</Text>
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
    color: "white",
  },
});
