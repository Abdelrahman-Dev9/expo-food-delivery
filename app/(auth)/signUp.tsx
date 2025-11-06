import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignUp = () => {
  return (
    <>
      <View>
        <View className="mt-4">
          <Text>Full Name</Text>
          <TextInput
            placeholder="enter your full name"
            className="py-2 border-b-2 border-gray-300"
          />
        </View>
        <View className="mt-[50px]">
          <Text>Email address</Text>
          <TextInput
            placeholder="enter your email"
            className="py-2 border-b-2 border-gray-300"
          />
        </View>
        <View className="mt-[50px]">
          <Text>Password</Text>
          <TextInput
            placeholder="enter your password"
            className="py-2 border-b-2 border-gray-300"
          />
        </View>
      </View>
      {/* Login Button */}
      <TouchableOpacity className=" bg-[#FE8C00] rounded-full mt-10 ">
        <Button title="Sign Up" color="white" />
      </TouchableOpacity>
      {/* Footer */}
      <View className="flex-row justify-center mt-8 font-bold">
        <Text>Already have an account?</Text>
        <TouchableOpacity>
          <Text className="text-[#FE8C00] font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUp;
