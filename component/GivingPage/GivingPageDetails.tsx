import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function GivingPageDetails() {
    const router = useRouter()

  const handlePress = () => {
    router.push('/(tabs)/giving')
 
    
    
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
    paddingHorizontal: 20, // horizontal padding
    paddingVertical: 20,
  },
  icon:{
    width:139,
    height:139,
    marginBottom:10
  },
  centerTextTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  messageText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#8C4616",
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch", // button stretches to fill container width
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
