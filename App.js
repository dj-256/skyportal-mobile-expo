import * as NavigationBar from "expo-navigation-bar";
import {useEffect} from "react";
import OnboardingScreen from "./screens/OnboardingScreen";

export default function App() {
  useEffect(() => {
    async function stuff() {
      await NavigationBar.setPositionAsync("absolute");
      await NavigationBar.setBackgroundColorAsync("#00000000");
      await NavigationBar.setButtonStyleAsync("light");
    }
    stuff();
  }, []);

  return OnboardingScreen();
}
