import { View, Text } from "react-native";
import { Result } from "../services/ChargersList.types";

const Card = ({ item }: { item: Result }) => {
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <Text>
        Address: {item.AddressInfo.AddressLine1} {item.AddressInfo.Town}{" "}
        {item.AddressInfo.StateOrProvince}
      </Text>
    </View>
  );
};

export default Card;
