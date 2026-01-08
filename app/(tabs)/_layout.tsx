import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";
import { BlurView } from 'expo-blur';

export default function Tablayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#8C461626',
          borderTopWidth: 0,
          elevation: 8,
          height: Platform.OS ==='ios'? 80:70,
          paddingTop:3,
          paddingHorizontal:16,
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          overflow: "hidden",
          borderWidth:0,         
        
        },
        tabBarBackground: () => (
          (
            <BlurView 
              intensity={15} 
              tint="light"
              style={{
                flex:1,
                borderRadius:25,
                overflow:'hidden',
                position: 'absolute',
               
              }}
            />
          )
        ),
        tabBarActiveTintColor: '#8C4616',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'PoppinsSemiBold',
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
              style={{ width: 24, height: 24 }} 
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
              style={{ width: 24, height: 24 }} 
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
              style={{ width: 24, height: 24 }} 
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
              style={{ width: 24, height: 24 }} 
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
              style={{ width: 24, height: 24 }} 
            />
          ),
        }}
      />
    </Tabs>
  );
}