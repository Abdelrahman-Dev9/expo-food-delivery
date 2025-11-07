import React from "react";
import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  backgroundImage: ImageSourcePropType;
  backgroundColor: string;
  title: string;
  price?: string;
}
const BurgerOneCard = ({
  backgroundImage,
  backgroundColor,
  title,
  price,
}: Props) => {
  return (
    <View
      className="flex-row justify-between mt-8 "
      style={{ padding: 10, backgroundColor, borderRadius: 20 }}
    >
      <View>
        <Text
          className="text-white"
          style={{
            color: "white",
            width: 131,
            fontSize: 30,
            fontWeight: "bold",
            position: "absolute",
            top: 20,
            left: 20,
          }}
        >
          {title}
        </Text>
        <Text
          className="text-white"
          style={{
            color: "white",
            width: 120,
            fontSize: 20,
            fontWeight: "bold",
            position: "absolute",
            bottom: 20,
            left: 20,
            zIndex: 10,
          }}
        >
          {price}
        </Text>
      </View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="contain"
        style={{ width: 300, height: 200 }}
      />
    </View>
  );
};

export default BurgerOneCard;
