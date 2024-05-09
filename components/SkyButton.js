import { Pressable, StyleSheet, Text } from "react-native";

export default function SkyButton(props) {
  return (
    <Pressable onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={[styles.text, props.style]}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#457B9D",
    padding: 16,
    alignItems: "center",
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
});
