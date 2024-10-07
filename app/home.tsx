import Navigation from "@/components/navigation/Navigation";
import "@/global.css";
import { Text, View } from "react-native";

export default function App() {
  return (
    <Navigation
      background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw"
      title="FitWave"
    >
      <View>
        <Text>Dag, Maand, Jaar</Text>
      </View>
    </Navigation>
  );
}
