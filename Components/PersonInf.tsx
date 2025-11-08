import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  icon: ImageSourcePropType;
  title: string;
  description: string;
}
const PersonInf = ({ icon, title, description }: Props) => {
  return (
    <View className="rounded-[15px] bg-white p-5 mt-5 flex-row  gap-5">
      <View className="p-4 bg-[#FE8C000D]/5 rounded-full">
        <Image source={icon} className="w-7 h-7" />
      </View>
      <View>
        <Text className="text-[#6A6A6A] text-[14px]">{title}</Text>
        <Text className="font-semibold text-[16px] mt-2">{description}</Text>
      </View>
    </View>
  );
};

export default PersonInf;
