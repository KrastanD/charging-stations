import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import { api } from "../services/api";
import { Result } from "../services/ChargersList.types";

function ChargerListScreen({ location }) {
  const [fetchError, setFetchError] = useState("");
  const [postError, setPostError] = useState("");
  const [chargerChosen, setChargerChosen] = useState<null | number>(null);
  const [chargers, setChargers] = useState<Result[]>(null);

  useEffect(() => {
    (async () => {
      try {
        const [chargers, error] = await api.fetchListOfChargers({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        if (error) {
          setFetchError(error.message);
        } else {
          setChargers(chargers);
        }
      } catch (e) {}
    })();
  }, [location]);

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
              address={`${item.AddressInfo.AddressLine1} ${item.AddressInfo.Town} ${item.AddressInfo.StateOrProvince}`}
              availableChargers={item.Connections.reduce((acc, curr) => {
                return acc + curr.Quantity;
              }, 0)}
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

export default ChargerListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
