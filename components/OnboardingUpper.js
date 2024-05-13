import { Image, StyleSheet, Text, View } from "react-native";
import { baseColors } from "../lib/theme";

export default function OnboardingUpper({ page }) {
  function getTagline() {
    switch (page) {
      case "welcome":
        return "Welcome to SkyPortal Mobile.\nAn Astronomical Data Platform.";
      case "login":
        return "Please select a SkyPortal instance and a login method";
      default:
        return "Please select a SkyPortal instance and a login method";
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/img/logo.png")} />
        <Text style={styles.logoText}>SkyPortal</Text>
      </View>
      <Text style={styles.tagline}>{getTagline()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 48,
    paddingVertical: 48,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    gap: 12,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: baseColors.berkeleyBlue,
  },
  tagline: {
    fontSize: 18,
    textAlign: "center",
    color: baseColors.cerulean,
    height: 54,
    lineHeight: 27,
  },
});
