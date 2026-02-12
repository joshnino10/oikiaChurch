import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,

  Image,
  Pressable,
} from "react-native";

export default function NoteDetails() {
  const [search, setSearch] = useState("");

  return (
   
      <View style={styles.page}>
        <View style={styles.row}>
          <Text style={styles.word}>Journals</Text>

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

        <View style={styles.centeredPage}>
           <Image style={styles.icon} source={require('../../assets/images/note icon.png')}/>
           <Text style={styles.title}>Spiritual Journal</Text>
           <Text style={styles.subtitle}>Your personal sanctuary for revelations
           received during the word. </Text>

           <Pressable style={styles.pressbtn}>
            <Text style={styles.pressText}>Create New Note</Text>
           </Pressable>
        </View>





      </View>
  
  );
}

const styles = StyleSheet.create({


  page: {
    flex:1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 40 : 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  word: {
    fontSize: 20,
    fontFamily: "PoppoinsSemiBold",
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

  centeredPage:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
  },

  icon:{
    width:102,
    height:102,
    marginBottom:20,

  },

  title:{
    fontFamily: 'PoppinsSemiBold',
    fontWeight:'600',
    fontSize:20,
    marginBottom:15,

  },
  subtitle:{
    fontFamily: 'PoppinsSemiBold',
    fontWeight:'600',
    fontSize:16,
    lineHeight:22,
    color:'#757575',
    textAlign:'center'
  },

  pressbtn:{
    marginTop:35
  },
  pressText:{
    fontFamily: 'PoppinsSemiBold',
    fontWeight: '600',
    fontSize:16,
    color:'#8C4616'

  }

});
