import React, { useState, useRef} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";

import Featured from "../../components/Featured";
import ColumnView from "../../components/ColumnView";

const img1 = require("../../assets/img1.png");

export default function ProfileHomeScreen({ navigation }) {
 
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScreenPress = (index) => {
    setActiveScreenIndex(index);
    scrollViewRef.current.scrollTo({
      x: index * SCREEN_WIDTH,
      y: 0,
      animated: true,
    });
  };

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / SCREEN_WIDTH);
    setActiveScreenIndex(currentIndex);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.uppertab}>
        <View style={styles.innertab}>
          <TouchableOpacity onPress={() => navigation.navigate("MessageChat")}>
            <Ionicons name="chatbubble" color={"#FF8216"} size={30} />
          </TouchableOpacity>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "medium", color: "black" }}
            >
              Alex Johns
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="ellipsis-horizontal" color={"#FF8216"} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.imageicon}>
          <Avatar.Image source={img1} size={110} />
          <Text
            style={{ fontSize: 18, fontWeight: "semibold", color: "darkgray" }}
          >
            @alex_johns
          </Text>
        </View>

        <View style={styles.followercount}>
          <TouchableOpacity style={{ alignItems: "center", width: "30%" }}>
            <Text style={styles.followtext}>180</Text>
            <Text style={{ color: "darkgray" }}>Following</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", width: "30%" }}>
            <Text style={styles.followtext}>1.2k</Text>
            <Text style={{ color: "darkgray" }}>Followers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center", width: "30%" }}>
            <Text style={styles.followtext}>120</Text>
            <Text style={{ color: "darkgray" }}>Sales</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.followercount1}>
          <TouchableOpacity
            onPress={() => handleScreenPress(0)}
            style={{
              width: "30%",
              borderBottomColor: activeScreenIndex === 0 ? "#FF8216" : "white",
              borderBottomWidth: 3,
              alignItems: "center",
            }}
          >
            <Ionicons
              name={activeScreenIndex === 0 ? "list" : "list-outline"}
              color={activeScreenIndex === 0 ? "#FF8216" : "gray"}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleScreenPress(1)}
            style={{
              width: "30%",
              borderBottomColor: activeScreenIndex === 1 ? "#FF8216" : "white",
              borderBottomWidth: 3,
              alignItems: "center",
            }}
          >
            <Ionicons
              name={activeScreenIndex === 1? "grid" : "grid-outline"}
              color={activeScreenIndex === 1 ? "#FF8216" : "gray"}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleScreenPress(2)}
            style={{
              width: "30%",
              borderBottomColor: activeScreenIndex === 2 ? "#FF8216" : "white",
              borderBottomWidth: 3,
              alignItems: "center",
            }}
          >
            <Ionicons
              name={activeScreenIndex === 2 ? "bookmark" : "bookmark-outline"}
              color={activeScreenIndex === 2 ? "#FF8216" : "gray"}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}>
        <SafeAreaView style={styles.screen}>
          <Featured />
        </SafeAreaView>
        <SafeAreaView style={styles.screen1}>
          <ColumnView  />
        </SafeAreaView>
        <SafeAreaView style={styles.screen}>
          <Featured />
        </SafeAreaView>
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  uppertab: {
    height: 70,
    backgroundColor: "white",
    marginBottom: 5,
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  innertab: {
    width: "92%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    justifyContent: "space-between",
  },
  imageicon: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 150,
    marginTop: 10,
  },
  followercount: {
    flexDirection: "row",
    height: 50,
    width: "85%",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 15,
  },
  followtext: { fontSize: 20, fontWeight: "semibold", color: "black" },
  followercount1: {
    flexDirection: "row",
    height: 45,
    width: "85%",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
  screen: { backgroundColor: '#d9d9d9',flex:1, width: SCREEN_WIDTH },
  screen1: { backgroundColor: 'white', flex : 1,width: SCREEN_WIDTH },
});
