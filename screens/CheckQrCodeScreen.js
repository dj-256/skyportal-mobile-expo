import { ActivityIndicator, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { checkToken } from "../lib/auth";
import { useEffect } from "react";
import { useTheme } from "@react-navigation/native";

export default function CheckQrCodeScreen() {
  const { token } = useLocalSearchParams();
  const { colors } = useTheme();
  console.log("Checking token", token);
  useEffect(() => {
    const stuff = () => {
      setTimeout(() => {
        checkToken(token)
          .then((userInfo) => {
            console.log(userInfo);
            router.navigate("/login-ok");
          })
          .catch((error) => {
            console.error("Invalid token", error);
          });
      }, 1000);
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
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}
