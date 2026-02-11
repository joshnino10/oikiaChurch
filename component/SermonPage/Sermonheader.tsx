import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

export default function Sermonheader() {
  return (
    <View style={styles.Page}>
      <View style={styles.row}>
        <View>
          <Text style={styles.Word}>The Word</Text>
        </View>

        <View style={styles.searchBox}>
          <TextInput placeholder="Search....." />

          <Feather style={{marginLeft:25}} name="search" size={20} color="#D3D3D3" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Page: {
    paddingHorizontal:16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBox: {
    alignItems:'center',
    backgroundColor: "#F5F5F5",
    paddingHorizontal: Platform.OS === 'ios'? 15:10,
    paddingVertical: Platform.OS === 'ios'? 10:7,
    borderRadius: 2000,
    flexDirection:"row",
  },
  Word:{
    fontSize:20,
    fontFamily:"NotoBold",
    color:'#000000',
    fontWeight:'700',
    letterSpacing:0


  },
});
