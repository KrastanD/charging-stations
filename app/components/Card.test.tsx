import Card from "./Card";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("Card", () => {
  it("should only render error when error is passed and it is chosen", () => {
    const { getAllByText, queryByText } = render(
      <Card
        address="Test Address, Illinois"
        availableChargers={5}
        onPress={null}
        isChosen={true}
        postError="Test error"
      />
    );
    expect(getAllByText("Test error")).toHaveLength(1);
    expect(queryByText("In Use")).toBeNull();
  });

  it("should say it is in use when it is chosen and has no error", () => {
    const { getAllByText } = render(
      <Card
        address="Test Address, Illinois"
        availableChargers={5}
        onPress={null}
        isChosen={true}
        postError=""
      />
    );
    expect(getAllByText("In Use")).toHaveLength(1);
  });

  it("should display the address passed to it", () => {
    const { getAllByText } = render(
      <Card
        address="Test Address, Illinois"
        availableChargers={5}
        onPress={null}
        isChosen={true}
        postError=""
      />
    );
    expect(getAllByText("Address: Test Address, Illinois")).toHaveLength(1);
  });
});
