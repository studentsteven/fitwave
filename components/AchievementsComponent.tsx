import React from "react";
import {View, StyleSheet, Text, Dimensions, Image, ScrollView} from "react-native";

export default function AchievementsComponent({steps}) {
    const screenWidth = Dimensions.get("window").width - 50;

    return (
        <View style={[styles.container, {width: screenWidth}]}>
            <ScrollView>

                <View style={styles.box}>
                    {steps > 10000 ? (
                        <Image style={styles.img} source={require("../assets/medelWithColor.png")}/>
                    ) : (
                        <Image style={styles.img} source={require("../assets/medelNoColor.png")}/>
                    )}
                    <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                        10k stappen
                    </Text>
                </View>

                <View style={styles.box}>
                    {steps > 25000 ? (
                        <Image style={styles.img} source={require("../assets/medelWithColor.png")}/>
                    ) : (
                        <Image style={styles.img} source={require("../assets/medelNoColor.png")}/>
                    )}
                    <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                        25k stappen
                    </Text>
                </View>


                <View style={styles.box}>
                    {steps > 50000 ? (
                        <Image style={styles.img} source={require("../assets/medelWithColor.png")}/>
                    ) : (
                        <Image style={styles.img} source={require("../assets/medelNoColor.png")}/>
                    )}
                    <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                        50k stappen
                    </Text>
                </View>

                <View style={styles.box}>
                    {steps > 100000 ? (
                        <Image style={styles.img} source={require("../assets/medelWithColor.png")}/>
                    ) : (
                        <Image style={styles.img} source={require("../assets/medelNoColor.png")}/>
                    )}
                    <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                        100k stappen
                    </Text>
                </View>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    box: {
        backgroundColor: "#4DBBCF",
        borderRadius: 10,
        flexDirection: "row",
        padding: 10,
        marginTop: 20,
    },

    text: {
        color: "white",
        fontSize: 25,
        marginTop: "auto",
        marginBottom: "auto",

    },

    img: {
        width: 114,
        height: 130,
    },

});
