import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import OnboardingUpper from "../components/OnboardingUpper";
import React, { useState } from "react";
import OnboardingLower from "../components/OnboardingLower";

export default function OnboardingScreen() {
  const [page, setPage] = useState("welcome");
  return (
    <ImageBackground
      source={require("../assets/img/sky_bg.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <OnboardingUpper page={page} />
        <OnboardingLower page={page} setPage={setPage} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
