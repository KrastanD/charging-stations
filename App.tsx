import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ChargerListScreen from "./app/screens/ChargerListScreen";

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject>(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationError("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (e) {
        setLocationError(e.message);
      }
    })();
  }, []);

  if (locationError) {
    return (
      <View style={styles.container}>
        <Text>
          Unable to locate you at this time. Go to settings and enable Location
          Services and try again
        </Text>
      </View>
    );
  }

  return <ChargerListScreen location={location} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
