import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderBar from "@/components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <HeaderBar />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: "#fffff",
  },
});
export default HomeScreen;
