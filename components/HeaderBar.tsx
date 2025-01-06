import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from '@expo/vector-icons/Fontisto';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      {/* Logo and App Name */}
      <View style={styles.logoContainer}>
        <Image style={styles.tinyLogo} source={require("../assets/logo.png")} />
        <Text style={styles.welcomeText}>SRCoach</Text>
      </View>

      {/* Inbox Icon */}
      <View style={styles.iconContainer}>
        <AntDesign name="inbox" size={28} color="#000" />
        <Fontisto name="bell" size={26} color="black" />
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Row layout
    alignItems: "center", // Center items vertically
    justifyContent: "space-between", // Space between logo and icons
    paddingHorizontal: 15, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
  },
  logoContainer: {
    flexDirection: "row", // Row layout for logo and text
    alignItems: "center", // Center items vertically
  },
  tinyLogo: {
    width: 32, // Slightly larger logo
    height: 32,
    marginRight: 8, // Space between logo and text
  },
  welcomeText: {
    fontSize: 18, // Font size for the app name
    fontWeight: "bold",
    color: "#000", // Black text color
  },
  iconContainer: {
    flexDirection: "row", 
    gap:25,
    alignItems: "center", // Center icon
    justifyContent: "center",
  },
});
