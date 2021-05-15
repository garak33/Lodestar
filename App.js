import React,{ Component } from 'react';


import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from 'react-native-splash-screen';

import BottomTabNavigator from "./navigation/TabNavigator";

export default class App extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  render (){
    return (
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    );
  }
}
