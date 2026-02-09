import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { activelivetab } from "./LiveTab";

export default function Live() {
  const handlePress = (item) => {
    console.log("Pressed:", item.PastorsName);
    // Add navigation or video play action here
  };

  return (
    <View>
      {activelivetab.map((item) => (
        <Pressable
          key={item.id}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          onPress={() => handlePress(item)}
        >
          {/* Top Row */}
          <View style={styles.row}>
            <Image style={styles.img} source={item.image} />

            <View style={styles.textContainer}>
              <Text style={styles.labelDate}>
                Up Next: <Text style={styles.date}>{item.date}</Text>
              </Text>

              <Text style={styles.semiTitle} numberOfLines={2}>
                Midweek Service with {item.PastorsName}
              </Text>

              <Text style={styles.time}>Time {item.Time}</Text>
            </View>
          </View>

          {/* Video */}
          <View style={styles.videoWrapper}>
            <Image style={styles.video} source={item.LiveVideo} />
          </View>
        </Pressable>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
    card: {
      padding: 12,
      marginBottom: 30,
      borderRadius: 12,
    },
  
    cardPressed: {
      opacity: 0.7, // touch feedback
    },
  
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
  
    img: {
      width: 52,
      height: 52,
      borderRadius: 20,
    },
  
    textContainer: {
      flex: 1,
    },
  
    labelDate: {
      fontFamily: "PoppinsSemiBold",
      fontSize: 14,
      color: "#000",
    },
  
    date: {
      fontFamily: "PoppinsMedium",
      color: "#261306",
      fontWeight: "500",
    },
  
    semiTitle: {
      fontFamily: "PoppinsSemiBold",
      fontSize: 12,
      color: "#261306",
      marginTop: 2,
    },
  
    time: {
      fontFamily: "PoppinsMedium",
      fontSize: 12,
      color: "#261306",
      marginTop: 2,
    },
  
    videoWrapper: {
      marginTop: 30,
      width: "100%",
      overflow: "hidden",
    },
  
    video: {
      width: "100%",
      height: undefined,
      aspectRatio: 16 / 9, // makes video responsive
      resizeMode: "cover",
    },
  });
  