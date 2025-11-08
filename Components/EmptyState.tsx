import React from "react";
import { Image, Text, View } from "react-native";

const EmptyState = () => {
  return (
    <View className="items-center flex-1 mx-5 mt-5 ">
      <Image
        source={require("@/assets/images/empty-state.png")}
        className="w-[172px] h-[128px] mt-[70px]"
      />
      <Text className="mt-6 text-[20px] font-bold text-[#181C2E]">
        Nothing matched your search
      </Text>
      <Text className="mt-4 text-[#878787]  text-[16px]">
        Try a different search term or check for typos.
      </Text>
    </View>
  );
};

export default EmptyState;
