import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="profile/index" />
      <Tabs.Screen name="course/index" />
      <Tabs.Screen name="resources/index" />
      <Tabs.Screen name="index" />
    </Tabs>
  );
};

export default TabLayout;
