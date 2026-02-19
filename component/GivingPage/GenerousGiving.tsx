import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import MissionCategories from "./MissionCategories";
import PaymentMethod from "./PaymentMethod";
import { useTheme } from "../context/ThemeProvider"; 

export default function GenerousGiving() {
  const {theme} = useTheme()
  const [amount, setAmount] = useState("");

 
  const formatAmount = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (value) => {
    if (value === "") {
      setAmount("");
      return;
    }
    const formatted = formatAmount(value);
    setAmount(formatted);
  };

  return (
    <View style={styles.page}>
      <Text style={[styles.label, {color: theme.colors.text}]}>Enter Custom Amount</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="#"
          placeholderTextColor="#D9D9D9"
          keyboardType="numeric"
          value={amount}              
          onChangeText={handleChange}
        />
      </View>
        <MissionCategories/>
        <PaymentMethod/>
       
     
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  label: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    color: "#000000",
  },

  inputWrapper: {
    backgroundColor: "#F5F5F5",
    flex:1,
    height: Platform.OS === 'ios'? 56:40,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  input: {
    fontSize: 30,
    fontFamily: "PoppinsSemiBold",
    color: "#000",
  },
});
