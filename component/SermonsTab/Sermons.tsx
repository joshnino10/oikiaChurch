import React from "react";
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { activesermontab } from "./SermonTab";

export default function Sermons() {
  const handlePress = (item) => {
    console.log("Pressed sermon:", item.title);
    // Navigate or play video
  };

  return (
    <View>
      {activesermontab.map((item) => (
        <Pressable
          key={item.id}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          onPress={() => handlePress(item)}
        >
          <View style={styles.row}>
            {/* Thumbnail */}
            <Image style={styles.img} source={item.image} />

            {/* Title + Play Button */}
            <View style={styles.content}>
              <View style={styles.titleRow}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <TouchableOpacity onPress={() => console.log("Play", item.title)}>
                  <Image
                    style={styles.playIcon}
                    source={require('../../assets/images/play icon.png')}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.pastornameText}>{item.pastorName}</Text>

              <View style={styles.titleRow}>
                <Text style={styles.dateAndTime} numberOfLines={2}>{item.DateAndTime}</Text>
                <TouchableOpacity onPress={() => console.log("Play",)}>
                  <Image
                    style={styles.playIcon}
                    source={require('../../assets/images/download icon.png')}
                  />
                </TouchableOpacity>
              </View>

            </View>




          </View>





        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
  },
  cardPressed: {
    opacity: 0.7,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  
  },
  img: {
    width: 88,
    height: 93,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginTop:11,
    
  
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
   
  },
  title: {
    fontFamily: 'PoppinsSemibold',
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    flexShrink: 1, // ensures long titles wrap
  },
  playIcon: {
    width: 24,
    height: 24,
  },

  pastornameText:{
    fontFamily: 'Poppinsregular',
    fontSize: 14,
    fontWeight:'400',
    marginTop: 6,

  },
  dateAndTime:{
    fontFamily: 'Poppinsregular',
    fontSize: 10,
    fontWeight:'400',
    marginTop: 10,

  }
});
