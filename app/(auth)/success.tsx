import { useRouter } from "expo-router";
import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Success = () => {
  const router = useRouter();
  return (
    <View>
      <ImageBackground
        source={require("@/assets/images/burger-two.png")}
        className="h-[50%] opacity-70 "
      />
      <View className="h-[50%] w-full  justify-center items-center  rounded-t-[25px]">
        <Image
          source={require("@/assets/images/success.png")}
          className="h-[250px] w-[250px] mt-[-50px]"
          resizeMode="contain"
        />
        <Text className="text-[24px] font-bold text-black">
          Login Successful
        </Text>
        <Text className="text-[16px] font-bold text-[#878787] mt-4">
          You’re all set to continue where you left off.
        </Text>
        <TouchableOpacity className="bg-[#FE8C00] rounded-full p-2 mt-10 w-[85%]">
          <Button
            title="Go to Homepage"
            color="white"
            onPress={() => router.push("")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;
