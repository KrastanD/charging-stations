import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { api } from "./app/services/api";
import { Result } from "./app/services/ChargersList.types";
import Card from "./app/components/Card";

export default function App() {
  const [fetchError, setFetchError] = useState("");
  const [postError, setPostError] = useState("");
  const [chargerChosen, setChargerChosen] = useState<null | number>(null);
  const [chargers, setChargers] = useState<Result[]>(null);

  useEffect(() => {
    (async () => {
      const [chargers, error] = await api.fetchListOfChargers({
        latitude: 41.8781,
        longitude: -87.6298,
      });
      if (error) {
        setFetchError(error.message);
      } else {
        setChargers(chargers);
      }
    })();
  }, []);

  const handlePress = useCallback(async (chargerId: number) => {
    setChargerChosen(chargerId);
    const error = await api.updateChargerBeingUsed(chargerId);
    if (error) {
      setPostError(error.message);
      setTimeout(() => {
        error.message = "";
        setChargerChosen(null);
      }, 2000);
    }
  }, []);

  if (chargers && chargers?.length > 0) {
    return (
      <SafeAreaView>
        <FlatList
          data={chargers}
          renderItem={({ item }) => (
            <Card
              item={item}
              onPress={() => handlePress(item.ID)}
              isChosen={chargerChosen === item.ID}
              postError={postError}
            />
          )}
        />
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <Text>No chargers nearby</Text>
      {fetchError && <Text>{fetchError}</Text>}
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
