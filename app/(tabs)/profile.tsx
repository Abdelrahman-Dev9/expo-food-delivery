import PersonInf from "@/Components/PersonInf";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView
      className={`mx-5 justify-center mt-5 ${
        Platform.OS === "ios" ? "h-[92%]" : "h-[90%]"
      }`}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔹 Header Section */}
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
            <Image
              source={require("@/assets/icons/arrow-back.png")}
              className="w-7 h-7"
            />
          </TouchableOpacity>
          <Text className="font-semibold text-[18px] mt-[-2]">Profile</Text>
          <Image
            source={require("@/assets/icons/search.png")}
            className="mr-5 w-7 h-7"
          />
        </View>
        {/* 🔹 avatar profile */}
        <View className="items-center justify-center mb-5">
          <Image
            source={require("@/assets/images/avatar.png")}
            className="rounded-full w-[150px] h-[150px] mt-10"
          />
        </View>
        {/* 🔹 profile Inf */}
        <PersonInf
          icon={require("@/assets/icons/user.png")}
          title="Full Name"
          description="Adrian Hajdin"
        />
        <PersonInf
          icon={require("@/assets/icons/envelope.png")}
          title="Email"
          description="adrian@jsmastery.com"
        />
        <PersonInf
          icon={require("@/assets/icons/phone.png")}
          title="Phone number"
          description="+1 555 123 4567"
        />
        <PersonInf
          icon={require("@/assets/icons/location.png")}
          title="Address 1 - (Home)"
          description="123 Main Street, Springfield, IL 62704"
        />
        <PersonInf
          icon={require("@/assets/icons/location.png")}
          title="Address 2 - (Work)"
          description="221B Rose Street, Foodville, FL 12345"
        />

        {/* Button */}
        <TouchableOpacity className="mt-10 border border-[#FE8C00] rounded-full p-4 justify-center items-center bg-[#FE8C00]/5">
          <Text className="text-[#FE8C00] text-[20px] font-bold">
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-10 border border-[#F14141] rounded-full p-4 justify-center items-center bg-[#F14141]/5">
          <View className="flex-row items-center justify-center gap-2">
            <Image
              source={require("@/assets/icons/logout.png")}
              className=" w-7 h-7"
            />
            <Text className="text-[#F14141] text-[20px] font-bold">Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
