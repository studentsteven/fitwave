import "@/global.css";
import { Image, StyleSheet, View } from 'react-native';
import { Heading } from "../ui/heading";

export default function Header() {
  return (

        <View style={styles.nav}>
          <Heading size="5xl" style={styles.heading}>Fitwave</Heading>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://media.licdn.com/dms/image/v2/D4E03AQFjCU2kJviPyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708070941708?e=1732147200&v=beta&t=d0g3gVL9XNIr-LKvJj08J3jGWvbMEVbECSAZA6_ak3Y',
            }}
          />
        </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#3EB1C8",
    padding: 15,
    paddingTop: 35,
  },
  heading: {
    color: "white"
  },
  account: {
    borderRadius: 9999,
    backgroundColor: "#ffffff",
    height: 40,
    width: 40
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 9999
  },
  white: {
    color: "white"
  },
});
