import { StyleSheet, View } from "react-native";
import { Card } from "../ui/card";
import Footer from "./Footer";
import Header from "./Header";
import { useUserData } from "../useUserData";
import { GluestackUIProvider } from "../ui/gluestack-ui-provider";

type NavigationProps = {
  children: React.ReactNode;
  background: string;
  title: string;
};

export default function Navigation({
  children,
  background,
  title,
}: NavigationProps) {
  const { username, email, userId } = useUserData();

  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        <Header achtergrond={background} titel={title} username={username} />
        <Card style={styles.card}>
          <View style={styles.childrenContainer}>{children}</View>
        </Card>
        <Footer />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    top: 0,
    overflow: "hidden",
    // Schaduw voor iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    // Schaduw voor Android
    elevation: 50,
  },
  childrenContainer: {
    flex: 1,
    padding: 20,
  },
});
