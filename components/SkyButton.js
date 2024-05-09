import { Pressable, StyleSheet, Text } from "react-native";
import { forwardRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const SkyButton = forwardRef(
  ({ title, type = "primary", children, onPress, icon }, ref) => {
    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          {
            flexDirection: icon?.position === "leading" ? "row-reverse" : "row",
            backgroundColor: type === "primary" ? "#457B9D" : "white",
          },
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: type === "primary" ? "white" : "#457B9D",
            },
          ]}
        >
          {title}
        </Text>
        {icon && (
          <MaterialIcons
            name={icon.name}
            color={type === "primary" ? "white" : "#457B9D"}
            style={styles.icon}
          />
        )}
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#457B9D",
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
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
  icon: {
    fontSize: 20,
  },
});

export default SkyButton;
