import ToppingCard from "@/Components/ToppingCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = () => {
  // Extract route parameters safely
  const { title, price, image } = useLocalSearchParams();
  const router = useRouter();

  // Safely handle possible array params
  const productTitle = Array.isArray(title) ? title[0] : title;
  const productPrice = Array.isArray(price) ? price[0] : price;
  const productImageParam = Array.isArray(image) ? image[0] : image;

  // Parse or fallback to uri image source
  let productImage = null;
  try {
    productImage = productImageParam ? JSON.parse(productImageParam) : null;
  } catch {
    productImage = productImageParam ? { uri: productImageParam } : null;
  }

  return (
    <SafeAreaView className="ml-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header with Back and Search icons */}
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => router.back()}>
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

        {/* Product title, rating, price and info */}
        <View className="flex-row justify-between mt-10">
          <View className="gap-5">
            <Text className="text-[24px] font-bold">{productTitle}</Text>
            <Text className="text-[#878787] text-[16px]">Cheeseburger</Text>

            {/* Stars rating */}
            <View className="flex-row gap-4">
              <View className="flex-row gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    source={require("@/assets/icons/star.png")}
                    className="w-[16px] h-[15px]"
                  />
                ))}
              </View>
              <Text className="m-0 text-[16px] text-[#878787] mt-[-2px]">
                4.9/5
              </Text>
            </View>

            {/* Price with dollar icon */}
            <View className="flex-row gap-1">
              <Image
                source={require("@/assets/icons/dollar.png")}
                className="w-5 h-5 mt-[5px]"
              />
              <Text className="text-[24px] font-bold">{productPrice}</Text>
            </View>

            {/* Nutrition info */}
            <View className="flex-row gap-2">
              <View className="gap-2">
                <Text className="text-[#878787] text-[14px]">Calories</Text>
                <Text className="text-[16px] font-bold">365 Cal</Text>
              </View>
              <View className="gap-2">
                <Text className="text-[#878787] text-[14px]">Protein</Text>
                <Text className="text-[16px] font-bold">35g</Text>
              </View>
            </View>

            {/* Bun type */}
            <Text className="text-[#878787] text-[14px] mt-2">Bun Type</Text>
            <Text className="text-[20px] font-bold text-[#181C2E]">
              Whole Wheat
            </Text>
          </View>

          {/* Product image */}
          <Image
            source={productImage}
            className="w-[300px] h-[305px]"
            resizeMode="contain"
          />
        </View>

        {/* Delivery info bar */}
        <View className="bg-[#FE8C000D] p-4 flex-row justify-between rounded-full mt-5">
          <View className="flex-row gap-4">
            <Image
              source={require("@/assets/icons/dollar.png")}
              className="w-5 h-5"
            />
            <Text className="text-[#181C2E] text-[14px]">Free Delivery</Text>
          </View>
          <View className="flex-row gap-4">
            <Image
              source={require("@/assets/icons/clock.png")}
              className="w-5 h-5"
            />
            <Text className="text-[#181C2E] text-[14px]">20 - 30 mins</Text>
          </View>
          <View className="flex-row gap-4">
            <Image
              source={require("@/assets/icons/star.png")}
              className="w-[16px] h-[15px]"
            />
            <Text className="text-[#181C2E] text-[14px]">4.5</Text>
          </View>
        </View>

        {/* Product description */}
        <Text
          style={{ lineHeight: 34 }}
          className="mt-10 text-[16px] text-[#6A6A6A]"
        >
          The Cheeseburger Wendy&apos;s Burger is a classic fast food burger
          that packs a punch of flavor in every bite. Made with a juicy beef
          patty cooked to perfection, it&apos;s topped with melted American
          cheese, crispy lettuce, tomato, & crunchy pickles.
        </Text>

        {/* Toppings section */}
        <Text className="mt-5 text-[20px] font-bold">Topping</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-5 text-[16px] mt-5 font-bold text-[#181C2E]">
            <ToppingCard
              productImage={require("@/assets/images/tomatoes.png")}
              title={"Tomato"}
            />
            <ToppingCard
              productImage={require("@/assets/images/onions.png")}
              title={"Onions"}
            />
            <ToppingCard
              productImage={require("@/assets/images/cheese.png")}
              title={"Cheese"}
            />
            <ToppingCard
              productImage={require("@/assets/images/bacon.png")}
              title={"Bacons"}
            />
          </View>
        </ScrollView>

        {/* Side options section */}
        <Text className="mt-5 text-[20px] font-bold">Side options</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-5 text-[16px] mt-5 font-bold text-[#181C2E]">
            <ToppingCard
              productImage={require("@/assets/images/fries.png")}
              title={"Fries"}
            />
            <ToppingCard
              productImage={require("@/assets/images/coleslaw.png")}
              title={"Coleslaw"}
            />
            <ToppingCard
              productImage={require("@/assets/images/salad.png")}
              title={"Salad"}
            />
            <ToppingCard
              productImage={require("@/assets/images/onion-rings.png")}
              title={"Pringles"}
            />
          </View>
        </ScrollView>

        {/* Quantity and Add to Cart section */}
        <View className="flex-row items-center justify-center w-full gap-10 p-4 mt-4 bg-white rounded-full">
          <Image source={require("@/assets/icons/minus.png")} className="w-5" />
          <Text>2</Text>
          <Image
            source={require("@/assets/icons/plus.png")}
            className="w-5 h-5"
          />
          <View className="flex-row bg-[#FE8C00] p-3 rounded-full gap-4 items-center justify-center">
            <Image
              source={require("@/assets/icons/bag.png")}
              tintColor={"white"}
              className="w-5 h-5"
            />
            <Text className="font-bold text-white text-[14px]">
              Add to cart (${productPrice})
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
