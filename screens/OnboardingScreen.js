import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SkyButton from "../components/SkyButton";
import { Link } from "expo-router";

export default function OnboardingScreen() {
  return (
    <ImageBackground
      source={require("../assets/img/sky_bg.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.upper}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/img/logo.png")} />
            <Text style={styles.logoText}>SkyPortal</Text>
          </View>
          <Text style={styles.tagline}>
            Welcome to SkyPortal Mobile.{"\n"}An Astronomical Data Platform.
          </Text>
        </View>
        <View style={styles.lower}>
          <Link href={"/onboarding/login-options"} asChild>
            <SkyButton title={"Log in"} />
          </Link>
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
  },
});
