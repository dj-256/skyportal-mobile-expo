import { ActivityIndicator, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { checkToken } from "../lib/auth";
import React, { useContext, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { AppContext } from "../lib/context";
import axios from "axios";

export default function CheckQrCodeScreen() {
  const { token } = useLocalSearchParams();
  const { colors } = useTheme();
  const { userInfo, setUserInfo } = useContext(AppContext);
  useEffect(() => {
    const stuff = () => {
      if (userInfo.instance) {
        return checkToken(token, userInfo.instance)
          .then(() => {
            const axiosClient = axios.create({
              baseURL: userInfo.instance.url,
              headers: {
                Authorization: `token ${token}`,
              },
            });
            setUserInfo({ ...userInfo, token, axiosClient });
            router.navigate("/login-ok");
          })
          .catch((error) => {
            console.error("Invalid token");
            console.error(error);
          });
      }
    };
    stuff();
  }, []);

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
