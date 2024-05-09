import { Pressable, StyleSheet, Text } from "react-native";
import { forwardRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const SkyButton = forwardRef((props, ref) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        styles.button,
        props.style,
        {
          flexDirection:
            props.icon.position === "leading" ? "row-reverse" : "row",
        },
      ]}
    >
      <Text style={[styles.buttonText, props.style]}>{props.title}</Text>
      {props.icon && (
        <MaterialIcons
          name={props.icon.name}
          color={"white"}
          style={styles.icon}
        />
      )}
    </Pressable>
  );
});

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
