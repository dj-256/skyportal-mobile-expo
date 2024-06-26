import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SkyButton from "../components/SkyButton";
import { Link } from "expo-router";

export default function LoginOptionsScreen() {
  return (
    <ImageBackground
      source={require("../assets/img/sky_bg.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.upper}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/img/logo.png")} />
            <Text style={styles.logoText}>SkyPortal</Text>
          </View>
          <Text style={styles.tagline}>Please choose a login option</Text>
        </View>
        <View style={styles.lower}>
          <Link href={"/qr-code/scan"} asChild>
            <SkyButton
              title={"Scan QR code"}
              icon={{ name: "qr-code", position: "leading" }}
            />
          </Link>
          <SkyButton
            title={"Log in with token"}
            type={"secondary"}
            onPress={() => Alert.alert("Get Started Button Clicked!")}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  logoContainer: {
    alignItems: "center",
    gap: 12,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 20,
    textAlign: "center",
    color: "#1D3557",
    height: 54,
  },
  upper: {
    flex: 1,
    gap: 48,
    paddingVertical: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
    gap: 32,
  },
});
