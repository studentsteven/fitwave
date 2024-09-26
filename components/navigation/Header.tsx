import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  Text,
} from "react-native";
import { Heading } from "../ui/heading";

type HeaderProps = {
  achtergrond: string;
  titel: string;
};

export default function Header({ achtergrond, titel }: HeaderProps) {
  return (
    <View style={{ position: "relative" }}>
      <ImageBackground
        resizeMode="cover"
        source={require("@/assets/backgroundosiris.png")}
        style={styles.background}
      />
      <ImageBackground
        resizeMode="cover"
        source={{ uri: achtergrond }}
        style={[styles.background, { opacity: 0.4 }]}
      />

      <View style={styles.nav}>
        <Heading size="5xl" style={styles.heading}>
          {titel}
        </Heading>
        <View style={styles.settings}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Image
              style={styles.notificaties}
              source={require("@/assets/notificaties.png")}
            />
            <Text style={styles.notificatiestext}>Notificaties</Text>
          </View>
          <View>
            <Image
              style={styles.pf}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D4E03AQFjCU2kJviPyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708070941708?e=1732147200&v=beta&t=d0g3gVL9XNIr-LKvJj08J3jGWvbMEVbECSAZA6_ak3Y",
              }}
            />
            <Text style={styles.account}>Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: Platform.OS === "ios" ? 20 : 35,
  },
  settings: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  heading: {
    color: "white",
  },
  account: {
    color: "white",
    fontSize: 11,
    top: 2,
  },
  notificatiestext: {
    color: "white",
    fontSize: 11,
    top: 5,
  },
  pf: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  notificaties: {
    width: 30,
    height: 37,
  },
  background: {
    width: "100%",
    height: 160,
    justifyContent: "center",
    position: "absolute",
  },
});
