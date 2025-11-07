import BurgerOneCard from "@/Components/Burger-one-card";
import FootCard from "@/Components/FoodCard";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="mx-5">
      <View className="gap-10">
        <Text className="text-[#FE8C00] font-bold text-[18px]">Deliver to</Text>
        <View className="flex-row justify-between">
          <View className="flex-row">
            <Text>Rijeka, Croatia</Text>
            <Image
              source={require("@/assets/icons/arrow-down.png")}
              className="m-1 size-3"
              resizeMode="contain"
            />
          </View>

          <Image
            source={require("@/assets/icons/bag.png")}
            className="w-[40px] h-[40px] p-3 bg-black rounded-full mt-[-15px]"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* <FoodCard
        imageUrl={require("../../assets/images/burger-one.png")}
        title="Summer Combo"
        price="$10.88"
      /> */}
      <ScrollView showsVerticalScrollIndicator={false} className="h-[85%] mt-4">
        <BurgerOneCard
          backgroundImage={require("@/assets/images/burger-one.png")}
          title="SUMMER COMBO"
          price="$10.88"
          backgroundColor="#D33B0D"
        />
        <FootCard
          backgroundImage={require("@/assets/images/burger-two.png")}
          title="BURGERS"
          icon={require("@/assets/icons/arrow-right.png")}
          backgroundColor="#EB920C"
        />

        <FootCard
          backgroundImage={require("@/assets/images/pizza-one.png")}
          title="PIZZA"
          icon={require("@/assets/icons/arrow-right.png")}
          backgroundColor="#084137"
          flexDirection="row-reverse"
        />

        <FootCard
          backgroundImage={require("@/assets/images/buritto.png")}
          title="Burrito"
          icon={require("@/assets/icons/arrow-right.png")}
          backgroundColor="#DF5A0C"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
