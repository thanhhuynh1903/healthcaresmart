import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from "react-native";
import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
const mockDevices = [
  { id: "1", name: "Device 1" },
  { id: "2", name: "Device 2" },
  { id: "3", name: "Device 3" },
];

const BLEScreen = () => {
  // const [devices, setDevices] = useState([]);
  type Device = { id: string; name: string };

  const [devices, setDevices] = useState<Device[]>([]);
  const [scanning, setScanning] = useState(false);
  // const [connectedDevice, setConnectedDevice] = useState(null);
  const [connectedDevice, setConnectedDevice] = useState<{ id: string; name: string } | null>(null);
  // Giả lập quá trình quét thiết bị BLE
  const startScan = async () => {
    setScanning(true);
    setTimeout(() => {
      setDevices(mockDevices); // Gán danh sách thiết bị giả
      setScanning(false);
    }, 2000); // Giả lập quá trình quét trong 2 giây
  };

  // Giả lập kết nối với thiết bị BLE
  const connectToDevice = async (device: any) => {
    Alert.alert("Connected", `Connected to ${device.name}`);
    setConnectedDevice(device); // Gán thiết bị đã kết nối
  };

  // Giả lập ngắt kết nối với thiết bị BLE
  const disconnectDevice = async () => {
    if (connectedDevice) {
      Alert.alert("Disconnected", `Disconnected from ${connectedDevice?.name}`);
      setConnectedDevice(null); // Xóa thiết bị đã kết nối
    }
  };

  // Render từng thiết bị trong danh sách
  const renderDeviceItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.deviceItem}
      onPress={() => connectToDevice(item)}
    >
      <Text style={styles.deviceName}>{item.name || "Unknown Device"}</Text>
      <Text style={styles.deviceId}>{item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper bg={""}>
    <View style={styles.container}>
      <BackButton size={26}/>
      <Text style={styles.header}>Bluetooth Devices</Text>
      <TouchableOpacity style={styles.scanButton} onPress={startScan}>
        <Text style={styles.scanButtonText}>
          {scanning ? "Scanning..." : "Start Scan"}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={renderDeviceItem}
        contentContainerStyle={styles.deviceList}
        ListEmptyComponent={
          !scanning ? <Text style={styles.noDevices}>No devices found.</Text> : null
        }
      />
      {connectedDevice && (
        <View style={styles.connectedContainer}>
          <Text style={styles.connectedText}>
            Connected to: {connectedDevice.name || "Unknown Device"}
          </Text>
          <TouchableOpacity
            style={styles.disconnectButton}
            onPress={disconnectDevice}
          >
            <Text style={styles.disconnectButtonText}>Disconnect</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  scanButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  deviceList: {
    flexGrow: 1,
  },
  deviceItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deviceId: {
    fontSize: 12,
    color: "#666",
  },
  noDevices: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
  connectedContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#e0ffe0",
    borderRadius: 10,
  },
  connectedText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  disconnectButton: {
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  disconnectButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default BLEScreen;
