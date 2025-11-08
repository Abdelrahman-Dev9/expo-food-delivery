import EmptyState from "@/Components/EmptyState";
import ProductCard from "@/Components/ProductCard";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState(true);
  const items = ["All", "Burgers", "Pizza", "Burrito", "Chechen"];

  return (
    <SafeAreaView className="flex-1">
      <View className="mx-5">
        {/* Header */}
        <View className="mb-5">
          <Text className="text-[#FE8C00] font-bold text-[18px] mb-3">
            Deliver to
          </Text>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="text-base font-semibold">Rijeka, Croatia</Text>
              <Image
                source={require("@/assets/icons/arrow-down.png")}
                className="w-3 h-3 ml-1"
                resizeMode="contain"
              />
            </View>
            <View className="items-center justify-center w-10 h-10 bg-black rounded-full">
              <Image
                source={require("@/assets/icons/bag.png")}
                className="w-5 h-5"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center justify-between w-full p-4 bg-white rounded-full shadow-md">
          <TextInput
            placeholder="Search for any food"
            className="flex-1 font-bold"
            accessibilityLabel="Search for food"
            returnKeyType="search"
          />
          <TouchableOpacity
            onPress={() => {
              setSearch(!selected);
            }}
          >
            <Image
              source={require("@/assets/icons/search.png")}
              className="ml-2 w-7 h-7"
              resizeMode="contain"
              accessibilityLabel="Search for food"
            />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        {search && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-5"
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {items.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setSelected(item)}
                className={`mr-2 py-3 px-6 rounded-full border ${
                  selected === item
                    ? "bg-orange-500 border-orange-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <Text
                  className={`font-semibold ${
                    selected === item ? "text-white" : "text-gray-600"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>

      {/* Product Grid */}

      {search ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-around mx-5">
            <View className="gap-5 mt-[20px]">
              <ProductCard
                id="1"
                productImage={require("@/assets/images/image 6.png")}
                title="Veggie Burger"
                price="From $10.4"
              />
              <ProductCard
                id="2"
                productImage={require("@/assets/images/top-view-delicious-pizza 1.png")}
                title="Margherita Magic"
                price="From $10.4"
              />
              <ProductCard
                id="3"
                productImage={require("@/assets/images/image.png")}
                title="Chicken Wrap"
                price="From $10.4"
              />
            </View>
            <View className="gap-5 mt-[80px] ">
              <ProductCard
                id="4"
                productImage={require("@/assets/images/image 5.png")}
                title="Veggie Burger"
                price="From $10.4"
              />
              <ProductCard
                id="5"
                productImage={require("@/assets/images/delicious-chicken-pizza-slices-hot-savory-meal 1.png")}
                title="Veggie Delight"
                price="From $10.4"
              />

              <ProductCard
                id="6"
                productImage={require("@/assets/images/image (1).png")}
                title="Veggie Delight"
                price="From $10.4"
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <EmptyState />
      )}
    </SafeAreaView>
  );
};

export default Search;
