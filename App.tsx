import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "./screens/WelcomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SignUpScreen from "./screens/SignUpScreen";
import GroupScreen from "./screens/GroupScreen";
import { theme } from "./contants/theme";
import BLEScreen from "./screens/BLEScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
type RootStackParamList = {
  BLEScreen: undefined;

  // Add other screens here
};
const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        position: "absolute",
        height: 80,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Map") {
          iconName = focused ? "map" : "map-outline";
        } else if (route.name === "Group") {
          iconName = focused ? "grid" : "grid-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.backgroundlight,
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen
      name="Dices"
      component={() => null} // No direct screen here
      options={{
        tabBarButton: () => {
          //render type useNavigation here
          const navigation =
            useNavigation<NativeStackNavigationProp<RootStackParamList>>();
          return (
            <TouchableOpacity
              style={styles.floatingButtonContainer}
              onPress={() => navigation.navigate("BLEScreen")} // Navigate to BLEScreen
            >
              <View style={styles.floatingButton}>
                <Ionicons name="dice-outline" size={30} color="#ffffff" />
              </View>
            </TouchableOpacity>
          );
        },
      }}
    />
    <Tab.Screen name="Group" component={GroupScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BLEScreen"
            component={BLEScreen}
            options={{ headerShown: false }} // No header if needed
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  floatingButtonContainer: {
    top: -10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  floatingButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: theme.colors.backgroundLinear,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  tabBarStyle: {
    marginTop: 25,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 8,
    elevation: 0,
  },
  tabLabelStyle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    textTransform: "none",
  },
  tabIndicatorStyle: {
    backgroundColor: "#fff",
    height: "50%",
    borderRadius: 20,
  },
  tabItemStyle: {
    padding: 10,
    borderRadius: 20,
  },
});
