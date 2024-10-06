import Navigation from "@/components/navigation/Navigation";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import {View, StyleSheet} from "react-native";
import AchievementsComponent from "@/components/AchievementsComponent";

export default function App() {
    const steps = Math.floor(Math.random() * (99000 + 1));

    return (
        <GluestackUIProvider mode="light">
            <Navigation
                background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw"
                title="FitWave">
                <View style={styles.container}>
                    <AchievementsComponent steps={steps}/>

                </View>
            </Navigation>
        </GluestackUIProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },
})