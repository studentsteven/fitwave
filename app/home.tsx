import Navigation from "@/components/navigation/Navigation";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getUserdata } from "@/components/UserData";

export default function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserdata();
      setUserData(data);
    };

    fetchData();
  }, []);
  return (
    <GluestackUIProvider mode="light">
      <Navigation background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw" title="FitWave">
        <View>
          <Text>Dag, Maand, Jaar</Text>
        </View>
      </Navigation>
    </GluestackUIProvider>
  );
}
