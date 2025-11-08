import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  productImage: ImageSourcePropType;
  title: string;
  price: string;
  count: string;
}
const CartItemCard = ({ productImage, title, price, count }: Props) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View className="flex-row items-center justify-between p-4 mt-5 bg-white rounded-[15px]">
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#FE8C00" : undefined}
      />
      <View>
        <Image
          source={productImage}
          className="p-2 bg-[#FE8C00]/10 rounded-[15px]"
        />
      </View>
      <View className="gap-6">
        <Text className="font-bold text-[16px]">{title}</Text>
        <Text className="text-[#FE8C00] text-[16px] font-bold">{price}</Text>
        <View className="flex-row items-center gap-4 ">
          <Image
            source={require("@/assets/icons/minus.png")}
            className="h-3  bg-[#FE8C00]/10 p-1"
          />
          <Text>{count}</Text>
          <Image
            source={require("@/assets/icons/plus.png")}
            className="w-5 h-5 bg-[#FE8C00]/10 p-1"
          />
        </View>
      </View>
      <Image source={require("@/assets/icons/trash.png")} />
    </View>
  );
};

export default CartItemCard;
