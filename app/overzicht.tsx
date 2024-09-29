import Navigation from "@/components/navigation/Navigation";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import {View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView} from "react-native";
import React from "react";
import Average from "@/components/Overzicht/Average";
import Chart from "@/components/Overzicht/Chart";
import Information from "@/components/Overzicht/Information";

export default function App() {
    const [typeO, setTypeO] = React.useState("day");
    return (
        <GluestackUIProvider mode="light">

            <Navigation
                background="https://www.aventus.nl/sites/default/files/styles/study_header_l/public/2024-09/rodeo-project-management-software-m9HQzdoK9u8-unsplash.webp?h=136e3684&itok=FC1NvTGV" // Use parentheses for require
                title="Overzicht">
                    <View style={styles.container}>
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

                        <View style={styles.items}>
                            <View style={styles.average}>
                                <Average></Average>
                            </View>

                            <View style={styles.chart}>
                                <Chart type={typeO}></Chart>
                            </View>

                            <View style={styles.information}>
                                <Information></Information>
                            </View>
                        </View>
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
    },

    TypeSelector: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginVertical: 0,
    },

    underline: {
        textDecorationLine: "underline",
    },

    typeText: {
        fontFamily: "Expo",
    },
    items: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    average: {
        flex: 0.5, // Takes up a fraction of the available space
    },

    chart: {
        flex: 0.5,

    },

    information: {
        flex: 0.5,
    },
})