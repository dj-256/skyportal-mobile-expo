import { ActivityIndicator, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { checkToken } from "../lib/auth";
import { useEffect } from "react";

export default function CheckQrCodeScreen() {
  const { token } = useLocalSearchParams();
  useEffect(() => {
    const stuff = () => {
      setTimeout(() => {
        checkToken(token).then((isValid) => {
          if (isValid) {
            router.navigate("/login-ok");
          } else {
            // TODO: Make error screen
          }
        });
      }, 2000);
    };
    stuff();
  }, [token]);

  if (!token) {
    return <View />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#457B9D" />
    </View>
  );
}
