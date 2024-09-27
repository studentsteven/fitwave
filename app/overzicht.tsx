import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import {View, Text } from "react-native";
import Chart from "@/components/Overzicht/Chart";
import RandomSteps from "@/components/Overzicht/RandomSteps";

export default function App() {
    const daily = [Math.random() * (1000), Math.random() * (2000), Math.random() * (1500), Math.random() * (5000)]
  return (
      console.log("---------"),
    <GluestackUIProvider mode="light">
      <Navigation background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw" title="Overzicht">
        <View>
            <Text><RandomSteps type={'day'}/></Text>

          <Chart type={"day"}></Chart>
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}
