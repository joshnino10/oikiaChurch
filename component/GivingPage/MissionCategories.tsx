import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeProvider"; 

export default function MissionCategories() {
  const {theme} = useTheme()
  const [selectedId, setSelectedId] = useState(null);

  const categories = [
    { id: "1", title: "Offering" },
    { id: "2", title: "Partnership" },
    { id: "3", title: "Tithes" },
    { id: "4", title: "Mission" },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.header, {color:theme.colors.text}]}>Mission Category</Text>

      <View style={styles.list}>
        {categories.map((item) => {
          const isSelected = selectedId === item.id;

          return (
            <Pressable
              key={item.id}
              onPress={() => setSelectedId(item.id)}
              style={[
                styles.row,
                isSelected && styles.activeRow,
              ]}
            >
              <Text
                style={[
                  styles.title,
                  isSelected && styles.activeTitle,
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  header: {
    fontSize: 16,
    fontWeight:'600',
    fontFamily: "PoppinsSemiBold",
    marginBottom: 12,
    color: "#000",
  },

  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    paddingHorizontal:16,
  },

  row: {
    width: "46%",       
    height: 44,
    borderRadius: 15,
    borderWidth:1,
    borderColor: '#B3B3B3',
    backgroundColor: "#D3D3D300",
    justifyContent: "center",
    alignItems: "center",
  },

  activeRow: {
    borderColor:'#8C4616',
    backgroundColor: "#F8DBC8",
  },

  title: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: "#757575",
  },

  activeTitle: {
    color: "#8C4616",
  },
});
