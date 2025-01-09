import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import { theme } from "@/contants/theme";
import { hp } from "@/helpers/common";

// Define the props type
interface ButtonProps {
  buttonStyle?: ViewStyle; // Style for the button container
  textStyle?: TextStyle; // Style for the text inside the button
  title?: string; // Button title text
  onPress?: () => void; // Callback for press event
  loading?: boolean; // Whether the button is in a loading state
  hasShadow?: boolean; // Whether the button has shadow
}

const ButtonModify: React.FC<ButtonProps> = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {
  // Shadow style (conditionally applied)
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowoffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default ButtonModify;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.backgroundlight,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
  },
  text: {
    fontSize: hp(2.5),
    color: "white",
    fontWeight: "bold",
  }, 
  whiteButton: {
    backgroundColor: "white",
    borderColor: theme.colors.primary, // Adjust to your blue color
    borderWidth: 1,
  },
  blueText: {
    color: theme.colors.primary, // Adjust to your blue color
  },
});
