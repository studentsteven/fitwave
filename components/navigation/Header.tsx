import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Heading } from "../ui/heading";
import { useRouter } from "expo-router";
import { useState } from "react";
import Button from "../Button";

type HeaderProps = {
  achtergrond: string;
  titel: string;
  username: string;
};

export default function Header({ achtergrond, titel, username }: HeaderProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const handleNotificationPress = () => {
    router.push("/notifications");

    const toggleMenu = () => {
      setMenuVisible((prevState) => !prevState); // Toggle de huidige waarde
    };

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
            <TouchableOpacity
              style={{ display: "flex", alignItems: "center" }}
              onPress={handleNotificationPress}
            >
              <Image
                style={styles.notificaties}
                source={require("@/assets/notificaties.png")}
              />
              <Text style={styles.notificatiestext}>Notificaties</Text>
            </TouchableOpacity>
            <Pressable
              style={{ display: "flex", alignItems: "center" }}
              onPress={toggleMenu}
            >
              <Image
                style={styles.pf}
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
                }}
              />
              <Text style={styles.account}>{username}</Text>
            </Pressable>

            <View style={menuVisible ? styles.menu : { display: "none" }}>
              <Text
                style={{ fontSize: 21, fontWeight: "bold", marginBottom: 12 }}
              >
                Welkom {username}!
              </Text>
              <Pressable
                style={[
                  styles.menuBtn,
                  { borderTopWidth: 1, borderTopColor: "#E2E2E2" },
                ]}
              >
                <Text style={styles.menuBtnText}>Profiel</Text>
              </Pressable>
              <Pressable style={styles.menuBtn}>
                <Text style={styles.menuBtnText}>Vrienden</Text>
              </Pressable>
              <Pressable style={styles.menuBtn}>
                <Text style={styles.menuBtnText}>Instellingen</Text>
              </Pressable>
              <Pressable style={styles.menuBtn}>
                <Text style={styles.menuBtnText}>Profiel</Text>
              </Pressable>

              <View style={{ marginTop: 15 }}>
                <Button text="Uitloggen" type="danger" />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      padding: Platform.OS === "ios" ? 20 : 20,
      paddingVertical: 30,
      paddingHorizontal: 20,
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
    menu: {
      position: "absolute",
      right: 0,
      top: 65,
      backgroundColor: "white",
      padding: 12,
      zIndex: 99,
      elevation: 50,
      borderRadius: 12,
      alignSelf: "flex-start",
    },
    menuBtn: {
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: "#E2E2E2",
    },
    menuBtnText: {
      fontSize: 18,
    },
  });
}
