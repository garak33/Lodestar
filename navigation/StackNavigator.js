import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTintColor: "black",
  headerBackTitle: "홈",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="홈" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="문의하기" component={Contact} />
    </Stack.Navigator>
  );
}



export { MainStackNavigator, ContactStackNavigator };