import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// If you're using Poppins, make sure fonts are loaded before rendering this component
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
        <Image
          source={require("../../assets/images/churchlogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.headerContainer}>
          <Text style={styles.title}>OIKIA</Text>
          <View>
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
    padding: 24,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  headerContainer: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  title2: {
    fontSize: 18,
    color: "#FFFFFF",
    lineHeight: 17,
  },
});
