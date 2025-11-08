import CartItemCard from "@/Components/CartItemCard";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="mx-5 h-[92%]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔹 Header Section */}
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
            <Image
              source={require("@/assets/icons/arrow-back.png")}
              className="w-7 h-7"
            />
          </TouchableOpacity>
          <Image
            source={require("@/assets/icons/search.png")}
            className="mr-5 w-7 h-7"
          />
        </View>

        {/* 🔹 Delivery Location Section */}
        <View className="flex-row justify-between mt-10">
          <View>
            <Text className="text-[#FE8C00] font-bold">Delivery location</Text>
            <Text className="mt-4 text-[16px] font-bold">Home</Text>
          </View>
          <Text className="border border-[#FE8C00] p-4 rounded-full text-[#FE8C00] font-bold">
            Change Location
          </Text>
        </View>

        {/* 🔹 Cart Items Section */}
        <CartItemCard
          productImage={require("@/assets/images/image 6.png")}
          title="Burger With Meat"
          price="$235.74"
          count="2"
        />
        <CartItemCard
          productImage={require("@/assets/images/top-view-delicious-pizza 1.png")}
          title="Margherita Magic"
          price="$135.82"
          count="1"
        />
        <CartItemCard
          productImage={require("@/assets/images/image.png")}
          title="Chicken Wrap Star"
          price="$467.63"
          count="3"
        />

        {/* 🔹 Payment Summary Section */}
        <View className="bg-white rounded-[15px] mt-4 p-5 gap-4">
          <Text className="text-[20px] font-bold">Payment Summary</Text>

          {/* Payment Details */}
          <View className="gap-4">
            <View className="flex-row justify-between">
              <Text className="text-[#6A6A6A] text-[16px]">
                Total Items (3)
              </Text>
              <Text className="text-[16px] font-bold">$900</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-[#6A6A6A] text-[16px]">Delivery Fee</Text>
              <Text className="text-[16px] font-bold">Free</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-[#6A6A6A] text-[16px]">Discount</Text>
              <Text className="text-[#2F9B65] text-[16px] font-bold">
                -$145
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-[16px]">Total</Text>
              <Text className="text-[16px] font-bold">$842</Text>
            </View>
          </View>
        </View>

        {/* 🔹 Order Button */}
        <TouchableOpacity className="p-4 bg-[#FE8C00] justify-center items-center mt-5 rounded-full">
          <Text className="text-white font-bold text-[16px]">Order Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
