import { Button, StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera/next";
import { useState } from "react";
import { router } from "expo-router";

export default function ScanQrCodeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  function handleBarcodeScanned(event) {
    setScanned(true);
    console.log("Scanned token", event.data);
    router.push(`/qr-code/check?token=${event.data}`);
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <CameraView
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}
      onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      style={styles.camera}
    ></CameraView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
