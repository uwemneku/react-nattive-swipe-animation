import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { HomePrams } from "../types";

const { Navigator, Screen } = createStackNavigator<HomePrams>();

const HomeNav = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
