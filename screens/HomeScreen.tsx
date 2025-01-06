import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderBar from "@/components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenWrapper from "@/components/ScreenWrapper";

const HomeScreen = () => {
  return (
    <ScreenWrapper bg={"white"}>
      <View style={style.container}>
        <HeaderBar />
      </View>
    </ScreenWrapper>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: "#fffff",
  },
});
export default HomeScreen;
