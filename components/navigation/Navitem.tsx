import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Button from "../Button";

const images = {
  workout: require("@/assets/workout.png"),
  overzicht: require("@/assets/overzicht.png"),
  home: require("@/assets/home.png"),
  leaderboard: require("@/assets/leaderboard.png"),
  voeding: require("@/assets/voeding.png"),
};

const NavItem = ({ afbeelding }) => {
  const imageSource = images[afbeelding];

  if (!imageSource) {
    console.error(`Afbeelding '${afbeelding}' niet gevonden.`);
    return null;
  }

  return (
    <Button type="navitem" link={afbeelding}>
      <Image style={styles.navitem} source={imageSource} />
    </Button>
  );
};

const styles = StyleSheet.create({
  navitem: {
    width: 50,
    height: 50,
  },
});

export default NavItem;
