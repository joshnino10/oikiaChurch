import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { activesermontab } from "./SermonTab";

export default function Sermons() {
 

 ;

  return (
    <View>
      {activesermontab.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.row}>

            {/* IMAGE TOUCH ONLY */}
            <Pressable
              android_ripple={{ color: "#ccc" }}
              onLongPress={() => console.log("Long pressed:", item.title)}
              style={styles.imageWrapper}
            >
              <Image style={styles.img} source={item.image} />
            </Pressable>

            {/* CONTENT */}
            <View style={styles.content}>
              <View style={styles.titleRow}>
                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>

                <TouchableOpacity onPress={() => console.log("Play", item.title)}>
                  <Image
                    style={styles.playIcon}
                    source={require("../../assets/images/play icon.png")}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.pastornameText}>{item.pastorName}</Text>

              <View style={styles.titleRow}>
                <View style={styles.timeRow}>
                  <Text style={styles.dateAndTime}>{item.Date}</Text>
                  <Ionicons
                    name="time-outline"
                    size={14}
                    color="#555"
                    style={{ marginHorizontal: 4 }}
                  />
                  <Text style={styles.dateAndTime}>{item.Time}</Text>
                </View>

                <TouchableOpacity onPress={() => console.log("Download")}>
                  <Image
                    style={styles.playIcon}
                    source={require("../../assets/images/download icon.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
  row: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  imageWrapper: {
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
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
    fontFamily: "PoppinsSemibold",
    fontSize: 16,
    fontWeight:'600',
    color: "#000",
    flexShrink: 1,
  },
  playIcon: {
    width: 24,
    height: 24,
  },
  pastornameText: {
    fontFamily: "Poppinsregular",
    fontSize: 14,
    marginTop: 6,
  },
  dateAndTime: {
    fontFamily: "Poppinsregular",
    fontSize: 11,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },


});
