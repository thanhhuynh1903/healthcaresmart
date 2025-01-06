import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Avatar } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import TopTab from "@/components/TopTab"; // Ensure you have this component created
import { theme } from "@/contants/theme"; // Ensure this file exists and is configured
import { hp } from "@/helpers/common"; // Ensure this helper function is available
import { SafeAreaView } from "react-native-safe-area-context";
const ProfileScreen: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <LinearGradient style={styles.header} colors={["#2193b0", "#6dd5ed"]}>
          <View>
            <Avatar
              title={"Shweta"}
              source={{
                uri: "https://img.lovepik.com/element/45016/4170.png_860.png",
              }}
              size="medium"
              rounded
              placeholderStyle={{ backgroundColor: "#ccc" }}
              titleStyle={{ color: "#fff" }}
            />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>Hello Shweta</Text>
            <Text style={styles.subHeader}>
              Yay! You have completed 56 days waiting time
            </Text>
          </View>
        </LinearGradient>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Ionicons
              name="heart-outline"
              size={30}
              color={theme.colors.redrose || "#ff5a5f"}
            />
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Life Saved</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons
              name="water-outline"
              size={30}
              color={theme.colors.redrose || "#ff5a5f"}
            />
            <Text style={styles.statValue}>B+</Text>
            <Text style={styles.statLabel}>Blood Group</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons
              name="heart-outline"
              size={30}
              color={theme.colors.redrose || "#ff5a5f"}
            />
            <Text style={styles.statValue}>256</Text>
            <Text style={styles.statLabel}>Appreciation</Text>
          </View>
        </View>

        {/* Availability Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>I am available to donate</Text>
          <Switch
            value={isAvailable}
            onValueChange={(value) => setIsAvailable(value)}
          />
        </View>

        {/* Donation Date Section */}
        <View style={styles.donationDateContainer}>
          <View>
            <Text style={styles.dateLabel}>Donation Date</Text>
            <Text style={styles.dateValue}>Mar 11</Text>
            <Text style={styles.dateSubText}>2 days left</Text>
          </View>
          <TouchableOpacity style={styles.calendarButton}>
            <Text style={styles.calendarText}>📅</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Manage Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Rewards</Text>
          </TouchableOpacity>
          <Button
            title="Logout"
            type="outline"
            onPress={() => navigation.navigate("Login")}
            buttonStyle={styles.logoutButton}
            titleStyle={styles.logoutButtonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom : 70,
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginHorizontal: -20,
    marginTop: -20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subHeader: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  toggleLabel: {
    fontSize: 16,
    color: "#000",
  },
  donationDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  dateLabel: {
    fontSize: 14,
    color: "#666",
  },
  dateValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  dateSubText: {
    fontSize: 12,
    color: "#666",
  },
  calendarButton: {
    backgroundColor: "#ff5a5f",
    borderRadius: 10,
    padding: 10,
  },
  calendarText: {
    color: "#fff",
    fontSize: 18,
  },
  optionsContainer: {
    marginTop: 20,
    gap: 10,
  },
  option: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: 10,
    borderColor: "#ff5a5f",
  },
  logoutButtonText: {
    color: "#ff5a5f",
  },
});

export default ProfileScreen;
