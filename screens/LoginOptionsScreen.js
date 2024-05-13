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
import { useState } from "react";
import { baseColors } from "../lib/theme";
import RNPickerSelect from "react-native-picker-select";
import { INSTANCES } from "../lib/constants";

export default function LoginOptionsScreen() {
  const [instance, setInstance] = useState(null);
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
          <Text style={styles.tagline}>
            Please select a SkyPortal instance and a login method
          </Text>
        </View>
        <View style={styles.lower}>
          <RNPickerSelect
            style={{
              inputIOS: styles.instanceSelect,
              inputAndroid: styles.instanceSelect,
            }}
            onValueChange={(value) => setInstance(value)}
            items={INSTANCES.map((instance) => ({
              label: instance.name,
              value: instance.url,
            }))}
          />
          <View style={styles.loginMethods}>
            <Link href={"/qr-code/scan"} asChild>
              <SkyButton
                title={"Scan QR code"}
                icon={{ name: "qr-code", position: "leading" }}
                onPress={(e) => instance === null && e.preventDefault()}
              />
            </Link>
            <SkyButton
              title={"Log in with token"}
              type={"secondary"}
              onPress={() => Alert.alert("Get Started Button Clicked!")}
            />
          </View>
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
    fontSize: 32,
    fontWeight: "bold",
    color: baseColors.berkeleyBlue,
  },
  tagline: {
    fontSize: 20,
    textAlign: "center",
    color: baseColors.cerulean,
    height: 54,
    paddingHorizontal: 16,
    lineHeight: 27,
  },
  upper: {
    flex: 1,
    gap: 48,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
    gap: 60,
  },
  instanceSelect: {
    backgroundColor: baseColors.white,
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    color: baseColors.onyx,
  },
  loginMethods: {
    gap: 16,
  },
});
