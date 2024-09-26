import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { Text, View } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw" title="Workout">
        <View>
          <Text>Workout</Text>
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}
