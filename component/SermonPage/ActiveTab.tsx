import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Live from '../LiveTab/Live'
import Lovedtabar from '../LovedTab/Lovedtabar'
import Playlist from '../PlaylistTab/Playlist'
import Sermons from '../SermonsTab/Sermons'
import { useTheme } from '../context/ThemeProvider' 



export default function ActiveTab() {
  const {theme} = useTheme()
  const [activeTab, setActiveTab] = useState('Live')

  const tabs = [
    { id: '1', label: 'Live' },
    { id: '2', label: 'Sermons' },
    { id: '3', label: 'Loved' },
    { id: '4', label: 'Playlist' },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        {tabs.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => setActiveTab(item.label)}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === item.label && styles.activeTabText,
                {color: theme.colors.text}
              ]}
            >
              {item.label}
            </Text>

            {activeTab === item.label && (
              <View style={[styles.underline,{backgroundColor: theme.colors.text}]} />
            )}
          </Pressable>
        ))}
      </View>

      <View style={styles.ContentContainer}>
        <ScrollView>
            {activeTab === "Live" && <Live/>}
            {activeTab === "Sermons" && <Sermons/>}
            {activeTab === 'Loved' && <Lovedtabar/>}
           
            {activeTab === "Playlist" && <Playlist/>}
        </ScrollView>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    marginTop: 20,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: '#777',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '600',
  },
  underline: {
    marginTop:0,
    height: 1,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 2,
  },

  ContentContainer:{
    marginTop:30,

  }
})
