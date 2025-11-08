import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  productImage: ImageSourcePropType;
  title: string;
  price: string;

  //{ productImage, title, price }: Props
}
const ProductCard = ({ productImage, title, price }: Props) => {
  return (
    <View
      className="flex items-center justify-center p-4 mt-10 bg-white"
      style={{ borderRadius: 40 }}
    >
      <Image source={productImage} className="w-[118px] h-[107px] " />
      <Text className=" mt-4 text-[18px]">{title}</Text>
      <Text className="mt-4 text-[#878787] text-[16px]">{price}</Text>
      <View className="flex flex-row gap-4 mt-4 ">
        <Image
          source={require("@/assets/icons/plus.png")}
          className="w-5 h-5 "
          tintColor="#FE8C00"
        />
        <Text className="text-[#FE8C00]">Add to cart</Text>
      </View>
    </View>
  );
};

export default ProductCard;
