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
import { BleManager, Device } from "react-native-ble-plx";
import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";

const BLEScreen = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [scanning, setScanning] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);

  const bleManager = new BleManager();

  // Request permissions for Bluetooth on Android
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      ]);
      return (
        granted["android.permission.ACCESS_FINE_LOCATION"] === "granted" &&
        granted["android.permission.BLUETOOTH_SCAN"] === "granted" &&
        granted["android.permission.BLUETOOTH_CONNECT"] === "granted"
      );
    }
    return true;
  };

  // Scan for BLE devices
  const startScan = async () => {
    const permissionGranted = await requestPermissions();
    if (!permissionGranted) {
      Alert.alert("Permission Denied", "Bluetooth permissions are required.");
      return;
    }

    setScanning(true);
    setDevices([]); // Clear previous devices

    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error("Scan error:", error);
        setScanning(false);
        return;
      }

      if (device && device.name) {
        // Add device to the list if it's not already added
        setDevices((prevDevices) => {
          const exists = prevDevices.some((d) => d.id === device.id);
          if (!exists) {
            return [...prevDevices, device];
          }
          return prevDevices;
        });
      }
    });

    // Stop scanning after 10 seconds
    setTimeout(() => {
      bleManager.stopDeviceScan();
      setScanning(false);
    }, 10000);
  };

  // Connect to a BLE device
  const connectToDevice = async (device: Device) => {
    try {
      const connectedDevice = await device.connect();
      await connectedDevice.discoverAllServicesAndCharacteristics();
      setConnectedDevice(connectedDevice);
      Alert.alert("Connected", `Connected to ${device.name}`);
    } catch (error) {
      console.error("Connection error:", error);
      Alert.alert("Connection Failed", "Could not connect to the device.");
    }
  };

  // Disconnect from the connected BLE device
  const disconnectDevice = async () => {
    if (connectedDevice) {
      try {
        await connectedDevice.cancelConnection();
        Alert.alert("Disconnected", `Disconnected from ${connectedDevice.name}`);
        setConnectedDevice(null);
      } catch (error) {
        console.error("Disconnection error:", error);
      }
    }
  };

  // Render each device in the list
  const renderDeviceItem = ({ item }: { item: Device }) => (
    <TouchableOpacity
      style={styles.deviceItem}
      onPress={() => connectToDevice(item)}
    >
      <Text style={styles.deviceName}>{item.name || "Unknown Device"}</Text>
      <Text style={styles.deviceId}>{item.id}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    return () => {
      // Clean up BLE manager on component unmount
      bleManager.destroy();
    };
  }, []);

  return (
    <ScreenWrapper bg={""}>
      <View style={styles.container}>
        <BackButton size={26} />
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
            !scanning ? (
              <Text style={styles.noDevices}>No devices found.</Text>
            ) : null
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
