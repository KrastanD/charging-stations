import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { api } from "./app/services/api";
import { Result } from "./app/services/ChargersList.types";
import Card from "./app/components/Card";

export default function App() {
  const [error, setError] = useState("");
  const [chargers, setChargers] = useState<Result[]>(null);
  useEffect(() => {
    (async () => {
      const [chargers, error] = await api.getListOfChargers({
        latitude: 41.8781,
        longitude: -87.6298,
      });
      if (error) {
        setError(error.message);
      } else {
        setChargers(chargers);
      }
    })();
  }, []);

  if (chargers && chargers?.length > 0) {
    return (
      <SafeAreaView>
        <FlatList
          data={chargers}
          renderItem={({ item }) => <Card item={item} />}
        />
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <Text>No chargers nearby</Text>
      {error && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
