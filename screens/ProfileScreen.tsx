import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Avatar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../contants/theme";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";

const posts = [
  { id: "1", image: "https://via.placeholder.com/150" },
  { id: "2", image: "https://via.placeholder.com/150" },
  { id: "3", image: "https://via.placeholder.com/150" },
  { id: "4", image: "https://via.placeholder.com/150" },
  { id: "5", image: "https://via.placeholder.com/150" },
  { id: "6", image: "https://via.placeholder.com/150" },
];

const ProfileScreen: React.FC = () => {
  return (
    <ScreenWrapper bg={"white"}>
      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <BackButton size={26} />
            <View style={styles.profileInfo}>
              <Avatar
                rounded
                size="large"
                source={{
                  uri: "https://img.lovepik.com/element/45016/4170.png_860.png",
                }}
              />
              <View style={styles.stats}>
                <View style={styles.statBox}>
                  <Ionicons
                    name="heart-outline"
                    size={30}
                    color={theme.colors.redrose || "#ff5a5f"}
                  />
                  <Text style={styles.statValue}>3</Text>
                  <Text style={styles.statLabel}>Life</Text>
                </View>
                <View style={styles.statBox}>
                  <Ionicons
                    name="water-outline"
                    size={30}
                    color={theme.colors.redrose || "#ff5a5f"}
                  />
                  <Text style={styles.statValue}>B+</Text>
                  <Text style={styles.statLabel}>Blood</Text>
                </View>
                <View style={{ ...styles.statBox, marginTop: 6 }}>
                  <FontAwesome
                    name="handshake-o"
                    size={24}
                    color={theme.colors.redrose || "#ff5a5f"}
                  />
                  <Text style={styles.statValue}>256</Text>
                  <Text style={styles.statLabel}>Appreciation</Text>
                </View>
              </View>
            </View>

            {/* Bio */}
            <View style={styles.bioContainer}>
              <Text style={styles.name}>Shweta Kumari</Text>
              <Text style={styles.bio}>
                🌍 Traveler | 📷 Photographer | 💻 Developer{"\n"}Life is about
                creating stories. 🌟
              </Text>
            </View>

            {/* Edit Profile Button */}
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </>
        }
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}
        contentContainerStyle={styles.postsGrid}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 120,
    justifyContent: "center",

  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    marginLeft: 20,
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
    fontSize: 14,
    color: "#666",
  },
  bioContainer: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  editButton: {
    margin: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  editButtonText: {
    color: "#000",
    fontSize: 16,
  },
  postsGrid: {
    paddingHorizontal: 10,
  },
  postImage: {
    width: "30%",
    aspectRatio: 1,
    margin: "1.5%",
    borderRadius: 5,
  },
});

export default ProfileScreen;
