import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/helpers/common";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonModify from "@/components/Button";
import BackgroundCustom from "@/components/BackgroundCustom";
import { theme } from "@/contants/theme";

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper bg="white">
      {/* Sử dụng BackgroundCustom */}
      <BackgroundCustom>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <Image
            style={styles.welcomImage}
            resizeMode="contain"
            source={require("../assets/run02preview.png")}
          />
          <View style={{ gap: 10 }}>
            <Text style={styles.title}> Welcome to SRCoach!!</Text>
            <Text style={{ ...styles.punchline, color: theme.colors.textLight }}>
              where experts will help you improve your health and monitor your
              health online
            </Text>
          </View>
          <View style={styles.footer}>
            <ButtonModify
              title="Login"
              onPress={() => navigation.push("Login")}
            />
            <ButtonModify
              buttonStyle={{
                backgroundColor: "white",
                borderColor: theme.colors.backgroundlight,
                borderWidth: 1,
              }}
              textStyle={{
                color: theme.colors.backgroundlight,
                fontWeight: "bold",
              }}
              title="Sign Up"
              onPress={() => navigation.push("SignUp")}
            />
          </View>
        </View>
      </BackgroundCustom>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent", // Đặt nền trong suốt để không xung đột với BackgroundCustom
    paddingHorizontal: wp(4),
  },
  welcomImage: {
    height: hp(50),
    width: wp(100),
    alignItems: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3),
    textAlign: "center",
    fontWeight: "800",
  },
  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(2),
    color: theme.colors.text,
  },
  footer: {
    gap: 10,
    width: "100%",
  },
});

export default WelcomeScreen;
