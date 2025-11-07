import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          height: 60,

          backgroundColor: "white",
          borderRadius: 50,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarActiveTintColor: "#FF7A00",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/icons/home.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "#FF7A00" : "#999",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarActiveTintColor: "#FF7A00",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/icons/search.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "#FF7A00" : "#999",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarActiveTintColor: "#FF7A00",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/icons/bag.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "#FF7A00" : "#999",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarActiveTintColor: "#FF7A00",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/icons/person.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "#FF7A00" : "#999",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
