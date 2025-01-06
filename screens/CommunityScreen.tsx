import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CommunityScreen: React.FC = () => {
  const donations = [
    { id: "1", name: "Tanya Tomer", action: "donated blood to Neil", time: "12 minutes ago" },
    { id: "2", name: "Sai Sahej", action: "donated blood to Aman", time: "24 minutes ago" },
    { id: "3", name: "Sahil Ahuja", action: "donated blood to Amir", time: "1 hour ago" },
    { id: "4", name: "Adah Farmah", action: "recently donated blood", time: "1 hour ago" },
  ];

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollContent}>
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>You are a real hero!</Text>
        <Text style={styles.bannerSubText}>
          You are in the top 5% of donors in Delhi
        </Text>
      </View>

      {/* Donation List */}
      {donations.map((donation) => (
        <View key={donation.id} style={styles.donationItem}>
          <Text style={styles.donationText}>
            <Text style={styles.donationName}>{donation.name}</Text> {donation.action}
          </Text>
          <Text style={styles.donationTime}>{donation.time}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
      },
      scrollContent: {
        flexGrow: 1,
        padding: 20,
      },
  banner: {
    backgroundColor: "#ff5a5f",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  bannerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerSubText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
  donationItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  donationText: {
    fontSize: 14,
    color: "#000",
  },
  donationName: {
    fontWeight: "bold",
  },
  donationTime: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});

export default CommunityScreen;
