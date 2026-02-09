import React from "react";
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { activesermontab } from "./SermonTab";
import Ionicons from '@expo/vector-icons/Ionicons';

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

            {/* Content */}
            <View style={styles.content}>
              {/* Title + Play button */}
              <View style={styles.titleRow}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <TouchableOpacity onPress={() => console.log("Play", item.title)}>
                  <Image
                    style={styles.playIcon}
                    source={require('../../assets/images/play icon.png')}
                  />
                </TouchableOpacity>
              </View>

              {/* Pastor Name */}
              <Text style={styles.pastornameText}>{item.pastorName}</Text>

              {/* Date + Time + Download */}
              <View style={styles.titleRow}>
                <View style={styles.timeRow}>
                  <Text style={styles.dateAndTime}>{item.Date}</Text>
                  <Ionicons name="time-outline" size={14} color="#555" style={{ marginRight: 4 }} />
                  <Text style={styles.dateAndTime}>{item.Time}</Text>

                </View>

                <TouchableOpacity onPress={() => console.log("Download")}>
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
    alignItems: "flex-start",
  },
  img: {
    width: 88,
    height: 93,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginTop: 4,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  pastornameText: {
    fontFamily: 'Poppinsregular',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 6,
  },
  dateAndTime: {
    fontFamily: 'Poppinsregular',
    fontSize: 11,
    fontWeight: '400',
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
