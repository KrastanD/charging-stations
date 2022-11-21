import { memo } from "react";
import { Text, Pressable } from "react-native";
import { Result } from "../services/ChargersList.types";

const Card = ({
  address,
  availableChargers,
  onPress,
  isChosen,
  postError,
}: {
  address: string;
  availableChargers: number;
  onPress: () => void;
  isChosen: boolean;
  postError: string;
}) => {
  return (
    <Pressable
      style={{
        marginHorizontal: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
      onPress={onPress}
    >
      <Text>Address: {address}</Text>
      <Text>Available Chargers: {availableChargers}</Text>
      {isChosen && postError === "" && <Text>In Use</Text>}
      {isChosen && postError && <Text>{postError}</Text>}
    </Pressable>
  );
};

export default memo(Card);
