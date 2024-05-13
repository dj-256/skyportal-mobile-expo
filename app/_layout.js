import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import { LightTheme } from "../lib/theme";
import React from "react";
import { AppContext } from "../lib/context";

const queryClient = new QueryClient();

export default function AppLayout() {
  const [userInfo, setUserInfo] = React.useState({
    name: undefined,
    token: undefined,
    instance: null,
    axiosClient: null,
  });
  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={LightTheme}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}
