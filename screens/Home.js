import React from "react";
import { SafeAreaView, View, Button, Text, StyleSheet } from "react-native";
import { Linking } from 'react-native';


const Seperator = () => (
  <View style = {styles.separator}/>
);

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style = {styles.main}>
      <View style = {styles.box}>
          <Seperator/>
              <Button 
                title = "인터넷 강의" 
                onPress = {() => navigation.navigate("About")}
              />
          <Seperator/>
              <Button
                title = "유학 과정"
                //onPress = {() => navigation.navigate("Student")}
              />
          <Seperator/>
              <Button
                title = "LODESTAR 홈페이지로"
                onPress = {() => Linking.openURL ('https://luke9410.wixsite.com/my-site-1')}
              />
          <Seperator/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  main : {
    flex : 1,
    backgroundColor : "white",
  },
  box : {
    marginHorizontal : 16,
    marginVertical : 50,
  },
  separator : {
    borderBottomColor : 'black',
    borderBottomWidth : 1,
  }
  
});

export default Home;