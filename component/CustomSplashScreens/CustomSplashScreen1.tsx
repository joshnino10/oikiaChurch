import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInLeft, FadeInRight } from "react-native-reanimated"; 

export default function CustomSplashScreen1() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LinearGradient
        colors={["#2B1F16", "#8C4616"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        {/* Logo */}
        <Animated.Image
         entering={FadeIn.delay(1000).springify()}
          source={require("../../assets/images/churchlogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        
        <Animated.View style={styles.headerContainer} entering={FadeIn}>
          <Animated.Text entering={FadeInLeft.delay(700)} style={styles.title}>OIKIA</Animated.Text>
          <View style={{ marginLeft: 0 }}>
            <Animated.Text entering={FadeInRight.delay(100)} style={styles.title2}>CHRISTIAN</Animated.Text>
            <Animated.Text entering={FadeInRight.delay(100)}  style={styles.title2}>CENTRE</Animated.Text>
          </View>
        </Animated.View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontFamily: "PoppinsSemiBold",
    color: "#FFFFFF",
  },

  title2: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    color: "#FFFFFF",
    lineHeight: 22,
  },
});
