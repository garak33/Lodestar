import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="All About U" 
        component={MainStackNavigator} 
        options = {{
          tabBarLabel : '홈',
          tabBarIcon : ({color,size}) => (
            <MaterialIcons name ="home" color = {color} size={size}/>
          ),
        }} 
      />
      <Tab.Screen 
        name="문의하기" 
        component={ContactStackNavigator} 
        options = {{
          tabBarLabel : '문의하기',
          tabBarIcon : ({color,size}) => (
            <MaterialCommunityIcons name = "face-profile" color = {color} size = {size}/>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;