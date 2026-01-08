import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet } from "react-native";
import { BlurView } from 'expo-blur';

export default function Tablayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#8C461626',   
          height: Platform.OS === 'ios' ? 80 : 60,
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          paddingTop: 4,
          paddingHorizontal: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
          borderWidth: 0,         
        },
        tabBarBackground: () => (
          <BlurView 
            intensity={Platform.OS === 'ios' ? 15 : 20} 
            tint={Platform.OS === 'ios' ? 'light' : 'default'}
            experimentalBlurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined}
            style={styles.blurView}
          />
        ),
        tabBarActiveTintColor: '#8C4616',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'PoppinsSemiBold',
          marginTop: 2,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/home active icon.png")
                  : require("../../assets/images/inactive home.png")
              }
              style={styles.tabIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="sermon"
        options={{
          title: "Sermon",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/sermon active icon.png")
                  : require("../../assets/images/sermon inactive icon.png")
              }
              style={styles.tabIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="giving"
        options={{
          title: "Giving",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/giving active icon.png")
                  : require("../../assets/images/giving inactive icon.png")
              }
              style={styles.tabIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="note"
        options={{
          title: "Note",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/note active icon.png")
                  : require("../../assets/images/note inactive icon.png")
              }
              style={styles.tabIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/profile active icon.png")
                  : require("../../assets/images/profile inactive icon.png")
              }
              style={styles.tabIcon}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});