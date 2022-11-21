import { memo } from "react";
import { Text, Pressable } from "react-native";
import { Result } from "../services/ChargersList.types";

const Card = ({
  item,
  onPress,
  isChosen,
  postError,
}: {
  item: Result;
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
      <Text>
        Address: {item.AddressInfo.AddressLine1} {item.AddressInfo.Town}{" "}
        {item.AddressInfo.StateOrProvince}
      </Text>
      <Text>
        Available Chargers:{" "}
        {item.Connections.reduce((acc, curr) => {
          return acc + curr.Quantity;
        }, 0)}
      </Text>
      {isChosen && postError === "" && <Text>In Use</Text>}
      {isChosen && postError && <Text>{postError}</Text>}
    </Pressable>
  );
};

export default memo(Card);
