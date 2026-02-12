import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";

export default function NoteDetails() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <View style={styles.row}>
          <Text style={styles.word}>The Word</Text>

          <View style={styles.searchBox}>

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search....."
              placeholderTextColor="#A9A9A9"
              style={styles.input}
            />
            <Feather   style={styles.searchIcon} name="search" size={18} color="#A9A9A9" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "#FFFFFF",
  },

  page: {
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 40 : 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  word: {
    fontSize: 22,
    fontFamily: "NotoBold",
    color: "#000000",
    fontWeight: "700",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    height: 38,
    borderRadius: 30,

  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },

  input: {
    // flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#000",
  },
  searchIcon: {
    marginLeft: 20,
  },
});
