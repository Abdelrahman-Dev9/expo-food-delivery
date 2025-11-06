import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Login from "./login";
import SignUp from "./signUp";

const Index = () => {
  //   const [selected, setLogin] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <View className="flex-1 bg-gray-400">
      {/*  Background Image */}
      <ImageBackground
        source={require("../../assets/images/burger-two.png")}
        className="h-[30%] relative"
        resizeMode="cover"
      >
        {/* Overlay */}
        <View className="absolute inset-0 bg-black/50" />
        {/* Logo */}

        <Image
          source={require("@/assets/images/logo.png")}
          className="absolute w-[90px] h-[90px] top-[45px] left-5 mt-2"
        />

        {/* text */}
        <View className="flex-col mt-[180px] ml-[30px]">
          <Text className="text-[32px] font-bold text-white">
            Get Started now
          </Text>
          <Text className="mt-4 text-white text-[16px]">
            Create an account or log in to explore
          </Text>
        </View>
      </ImageBackground>
      {/*  Form Section */}

      <View className="h-[70%] bg-white rounded-t-[30px] pt-8 px-6">
        {/* Tab Switcher */}
        <View className="flex-row p-1 mb-8 bg-gray-100 rounded-xl">
          <TouchableOpacity
            onPress={() => setLogin(true)}
            className={`flex-1 py-3 rounded-lg ${login ? "bg-white" : ""}`}
          >
            <Text
              className={`text-center text-base font-medium ${
                login ? "text-orange-500" : "text-gray-400"
              }`}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLogin(false)}
            className={`flex-1 py-3 rounded-lg ${!login ? "bg-white" : ""}`}
          >
            <Text
              className={`text-center text-base font-medium ${
                !login ? "text-orange-500" : "text-gray-400"
              }`}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {/* Login Form */}
        {login ? <Login /> : <SignUp />}
      </View>
    </View>
  );
};

export default Index;
