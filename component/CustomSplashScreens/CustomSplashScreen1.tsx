import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
        <Image
          source={require("../../assets/images/churchlogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Header Text */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>OIKIA</Text>
          <View style={{ marginLeft: 0 }}>
            <Text style={styles.title2}>CHRISTIAN</Text>
            <Text style={styles.title2}>CENTRE</Text>
          </View>
        </View>
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
    marginBottom: 30, // better spacing
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
    lineHeight: 22, // better readability
  },
});
