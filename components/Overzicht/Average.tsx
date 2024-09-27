import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function Average() {
    const screenWidth = Dimensions.get("window").width -50;


    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },

});
