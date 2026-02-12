import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GivingPageDetails() {
    const router = useRouter()

  const handlePress = () => {
    router.replace('/(tabs)/giving')
      
  };

  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require('../../assets/images/big successful icon.png')}/>
      <Text style={styles.centerTextTitle}>God Bless You!</Text>
      <Text style={styles.messageText}>
        Your generous giving has been received with gratitude. Together we are
        building the kingdom.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Back to giving</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20, 
    paddingVertical: 20,
  },
  icon:{
    width:139,
    height:139,
    marginBottom:10
  },
  centerTextTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
  messageText: {
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#8C4616",
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch", 
  },
  buttonText: {
    fontFamily: 'PoppinsSemiBold',
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
