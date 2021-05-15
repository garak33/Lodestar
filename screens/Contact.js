import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { Linking } from 'react-native';

const Seperator = () => (
  <View style = {styles.separator}/>
);

const Home = ({ navigation }) => {
  return (
    <View style = {styles.main}>
      <View style = {styles.box}>
        <Text>전화번호 : +1 778 823 5813</Text>
        <Text>주소 : Unit# 620, 2950 Glen Dr, Coquitlam BC, V3B 0J1</Text>
        <Text>수업 시간 : PST MON~FRI  04:00 p.m. ~ 11:30 p.m.</Text>
        <Text>                         SAT~SUN  10:00 a.m. ~ 06:00 p.m.</Text>
        <Text>                 KST TUE~SAT  08:00 a.m. ~ 02:30 p.m.</Text>
        <Text>                         SUN~MON 02:00 a.m. ~ 09:30 a.m.</Text>
      </View>

        <Seperator/>

        <MapView 
          style = {styles.map}
          initialRegion = {{
            latitude : 49.2824,
            longitude : -122.7983,
            latitudeDelta : 0.010,
            longitudeDelta : 0.010
          }}
        >
            <Marker
              coordinate = {{
                latitude : 49.2824, 
                longitude : -122.7983
                }}
              pinColor = "blue"
            />
        </MapView>

        <Text 
          style = {{
            color : 'blue',
            justifyContent : "center",
            alignItems : "center",
            textAlign : "center",
          }}
          onPress = {() => Linking.openURL('https://www.google.com/maps/place/Lodestar+Education/@49.2825132,-122.8006846,17z/data=!3m1!4b1!4m5!3m4!1s0x54867f56b9d56f33:0x2687d42a121700b!8m2!3d49.2825657!4d-122.7984903')}
        >
          구글맵 바로가기
        </Text>
        
        <Text
          style = {{
            color : 'blue',
            justifyContent : "center",
            alignItems : "center",
            textAlign : "center",
            marginVertical : 16
          }}
          onPress = {() => Linking.openURL('https://open.kakao.com/o/siyKcQcd')}
        >
          상담원과 연결
        </Text>

        <Seperator/>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  main : {
    flex: 1,
    backgroundColor : "white",
  },
  box : {
    marginHorizontal : 16,
    marginVertical : 16,
  },
  map : {
    height : 400,
    marginHorizontal : 10,
    marginVertical : 30
  },
  separator : {
    marginHorizontal : 10,
    borderBottomColor : 'black',
    borderBottomWidth : 1,
  }
});

export default Home;