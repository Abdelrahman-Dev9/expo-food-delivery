import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  productImage: ImageSourcePropType;
  title: string;
}
const ToppingCard = ({ productImage, title }: Props) => {
  return (
    <View className="w-[100px] h-[100px] bg-black rounded-md overflow-hidden rounded-bl-[15px] rounded-br-[15px]">
      <View className="w-full h-[60px] bg-white rounded-bl-[15px] rounded-br-[15px] justify-center items-center p-2">
        <Image
          source={productImage}
          className="w-[60px] h-[60px] "
          resizeMode="contain"
        />
      </View>

      <View className="flex-row items-center justify-center gap-4 px-2 mt-3">
        <Text className="text-sm font-medium text-white">{title}</Text>
        <View className="flex items-center justify-center w-4 h-4 p-2 bg-red-500 rounded-full">
          <Image
            source={require("@/assets/icons/plus.png")}
            className="w-4 h-4"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default ToppingCard;
