import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Heading } from "../ui/heading";

type HeaderProps = {
  achtergrond: string;
};

export default function Header({ achtergrond }: HeaderProps) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: achtergrond || "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
      }}
    >
      <View style={styles.nav}>
        <Heading size="5xl" style={styles.heading}>Fitwave</Heading>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://media.licdn.com/dms/image/v2/D4E03AQFjCU2kJviPyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708070941708?e=1732147200&v=beta&t=d0g3gVL9XNIr-LKvJj08J3jGWvbMEVbECSAZA6_ak3Y',
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    paddingTop: 35,
  },
  heading: {
    color: "white",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
  background: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    paddingTop: 35,
  },
});
