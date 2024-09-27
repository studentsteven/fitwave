import Navigation from "@/components/navigation/Navigation";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Chart from "@/components/Overzicht/Chart";
import React from "react";

export default function App() {
    const [typeO, setTypeO] = React.useState("day");
    return (
        <GluestackUIProvider mode="light">
            <Navigation
                background="https://aventus.nl/sites/default/files/styles/hero_xl/public/2024-09/A%2013-05-2024-820.webp?h=a05ca7ed&itok=Q-_GJYmw"
                title="Overzicht">
                <View>

                    <View style={styles.TypeSelector}>
                        <TouchableOpacity onPress={() => setTypeO("day")}>
                            <Text style={[styles.typeText, typeO === "day" && styles.underline]}>
                                Day
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setTypeO("week")}>
                            <Text style={[styles.typeText, typeO === "week" && styles.underline]}>
                                Week
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setTypeO("year")}>
                            <Text style={[styles.typeText, typeO === "year" && styles.underline]}>
                                Jaar
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <Chart type={typeO}></Chart>


                </View>
            </Navigation>
        </GluestackUIProvider>
    );
}
const styles = StyleSheet.create({
    TypeSelector: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 20,
    },

    underline: {
        textDecorationLine: "underline",
        textDecorationColor: "#3EB1C8", // Set the underline color
    },

    typeText: {
        fontFamily: "Expo",
    }
})