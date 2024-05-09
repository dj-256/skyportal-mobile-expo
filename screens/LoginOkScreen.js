import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { router } from "expo-router";

export default function LoginOkScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.navigate("/(tabs)/sources");
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MaterialIcons name={"check-circle"} size={155} color={"#438E29"} />
        <View style={styles.textContainer}>
          <Text style={styles.textLine1}>You are now logged in!</Text>
          <Text style={styles.textLine2}>Welcome back William 😄</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    paddingVertical: 54,
    alignItems: "center",
    gap: 40,
  },
  textContainer: {
    alignItems: "center",
    gap: 16,
  },
  textLine1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textLine2: {
    fontSize: 16,
    textAlign: "center",
    color: "#1D3557",
  },
});
