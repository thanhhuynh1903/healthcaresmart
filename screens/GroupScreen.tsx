import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderBar from "@/components/HeaderBar";
import ScreenWrapper from "@/components/ScreenWrapper";
import { wp } from "@/helpers/common";

const categories = [
  { id: 1, name: "Therapist", icon: "medkit-outline" },
  { id: 2, name: "Dentist", icon: "md-medical" },
  { id: 3, name: "Surgeon", icon: "body-outline" },
];

const doctors = [
  {
    id: "1",
    name: "Dr. Siles Duke",
    specialty: "Dentistry",
    rating: 4.5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Dr. John Doe",
    specialty: "Cardiology",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Dr. Emily Johnson",
    specialty: "Pediatrics",
    rating: 4.5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Dr. Michael Brown",
    specialty: "Orthopedics",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
];

const GroupScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(2);

  return (
    <ScreenWrapper bg={"#edf3fc"}>
      {/* Header */}
      <HeaderBar />

      {/* ScrollView bao bọc toàn màn hình */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Welcome Text */}
          <Text style={styles.welcomeText}>
            Dear friend, get well soon{"\n"}
            <Text style={{ fontWeight: "bold" }}>and rock your life!</Text>
          </Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="#999" />
            <TextInput style={styles.searchInput} placeholder="Search" />
          </View>

          {/* Categories */}
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesContainer}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryItem,
                  selectedCategory === cat.id && styles.selectedCategory,
                ]}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <Ionicons
                  name={cat.icon as any}
                  size={36}
                  color={selectedCategory === cat.id ? "white" : "black"}
                />
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === cat.id && { color: "white" },
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Doctors */}
          <View style={styles.sectionStyle}>
            <Text style={styles.sectionTitle2}>Doctors</Text>
            <Text style={styles.sectionbox}>All</Text>
          </View>

          {/* Grid of Doctor Cards */}
          <View style={styles.doctorGrid}>
            {doctors.map((doctor) => (
              <View key={doctor.id} style={styles.card}>
                {/* Doctor Image */}
                <Image source={{ uri: doctor.image }} style={styles.image} />

                {/* Doctor Info */}
                <Text style={styles.name}>{doctor.name}</Text>
                <Text style={styles.specialty}>{doctor.specialty}</Text>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                  {[...Array(5)].map((_, index) => (
                    <Ionicons
                      key={index}
                      name={
                        index < Math.floor(doctor.rating)
                          ? "star"
                          : index < doctor.rating
                          ? "star-half"
                          : "star-outline"
                      }
                      size={16}
                      color="#FFD700"
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: wp(20), // Khoảng cách dưới cùng để cuộn thoải mái
  },
  container: { flex: 1, marginTop: 5, paddingHorizontal: 20 },
  welcomeText: { fontSize: 26, color: "#333" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  sectionTitle: { fontSize: 21, fontWeight: "bold", marginTop: 20 },
  sectionTitle2: { fontSize: 21, fontWeight: "bold", marginTop: 0 },
  sectionbox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#e2ebfb",
    borderRadius: 10,
    borderColor: "#a6badf",
    borderWidth: 1,
    fontSize: 20,
    color: "#8eadf2",
    fontWeight: "bold",
  },
  categoriesContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  selectedCategory: { backgroundColor: "#4A90E2" },
  categoryText: { marginTop: 5, fontSize: 14 },
  sectionStyle: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  doctorGrid: {
    flexDirection: "row",
    flexWrap: "wrap", // Tự động xuống dòng khi hết không gian
    justifyContent: "space-between",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    alignItems: "center",
    height:230,
    width: 180, // Chiều rộng mỗi thẻ chiếm 45% màn hình
    marginBottom: 20, // Khoảng cách giữa các hàng
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },
  specialty: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GroupScreen;
