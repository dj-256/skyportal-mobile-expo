import SkyButton from "./SkyButton";
import { Alert, StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { INSTANCES } from "../lib/constants";
import { Link } from "expo-router";
import { baseColors } from "../lib/theme";

export default function OnboardingLower({
  page,
  setPage,
  setInstance,
  instance,
}) {
  if (page === "welcome")
    return (
      <View style={styles.lower}>
        <SkyButton title={"Log in"} onPress={() => setPage("login")} />
      </View>
    );
  else
    return (
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
    );
}

const styles = StyleSheet.create({
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
