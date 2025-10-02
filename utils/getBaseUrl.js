import { Platform } from "react-native";

export function getBaseUrl() {
  if (typeof document !== "undefined") {
    // Running on Web
    return "http://localhost:5000"; // Or your web backend endpoint
  }

  if (Platform.OS === "ios") {
    // iOS Simulator uses localhost correctly
    return "http://localhost:5000";
  }

  if (Platform.OS === "android") {
    // Android emulator uses 10.0.2.2 instead of localhost
    return "http://10.0.2.2:5000";
  }

  // Fallback (e.g., physical device, you may need your machine's LAN IP)
  return "http://192.168.1.100:5000"; // replace with your machine IP

}