import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import { hp } from "@/helpers/common";
import { wp } from "@/helpers/common";
import ScreenWrapper from "@/components/ScreenWrapper";
import Feather from "@expo/vector-icons/Feather";
import BackButton from "@/components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@/contants/theme";
import Input from "@/components/Input";
import Fontisto from "@expo/vector-icons/Fontisto";
import ButtonModify from "@/components/Button";
const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email === "admin" && password === "123456") {
      navigation.replace("Main");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <ScreenWrapper bg={"white"}>
      <View style={styles.container}>
        <BackButton size={26} />
        <View>
          <Text style={styles.welcomeText}>Hey 😉,</Text>
          <Text style={styles.welcomeText}>Welcome back</Text>
        </View>
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.textLight }}>
            Please login to continue
          </Text>
          <Input
            icon={<Fontisto name="email" size={24} color="black" />}
            placeholder="Enter your email"
            onChangeText={(value) => setEmail(value)}
            value={email}
            keyboardType="email-address"
          />
          <Input
            icon={<Feather name="lock" size={24} color="black" />}
            placeholder="Enter your password"
            onChangeText={(value) => setPassword(value)}
            value={password}
            secureTextEntry={true}
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
        <ButtonModify
          title="Login"
          onPress={() => navigation.replace("Main")}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.push("SignUp")}>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.backgroundlight, fontWeight: "bold" },
              ]}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeImage: {
    height: hp(18),
    width: wp(100),
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: "bold",
    color: theme.colors.text,
  },

  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "600",
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
export default LoginScreen;
