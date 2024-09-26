import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Box } from "../ui/box";

const images = {
  workout: require("@/assets/workout.png"),
  overzicht: require("@/assets/overzicht.png"),
  home: require("@/assets/home.png"),
  leaderbord: require("@/assets/leaderbord.png"),
  voeding: require("@/assets/voeding.png"),
};

const NavItem = ({ afbeelding }) => {
  const imageSource = images[afbeelding];

  if (!imageSource) {
    console.error(`Afbeelding '${afbeelding}' niet gevonden.`);
    return null;
  }

  return (
    <View>
      <Box>
        <Image style={styles.navitem} source={imageSource} />
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  navitem: {
    width: 50,
    height: 50,
  },
});

export default NavItem;
