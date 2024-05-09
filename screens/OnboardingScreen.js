import {StatusBar} from "expo-status-bar";
import {Alert, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableHighlight, View,} from "react-native";

export default function OnboardingScreen() {
  return (
    <ImageBackground
      source={require("../assets/img/onboarding_bg.png")}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
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
          <TouchableHighlight
            underlayColor="#386480"
            activeOpacity={0.1}
            onPress={() => Alert.alert("Get Started Button Clicked!")}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#457B9D",
    padding: 16,
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "rgb(44, 48, 51)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
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