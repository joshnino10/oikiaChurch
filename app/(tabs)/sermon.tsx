import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sermonheader from '@/component/SermonPage/Sermonheader'
import ActiveTab from '@/component/SermonPage/ActiveTab'

export default function Sermon() {
  return (
    <SafeAreaView style={styles.Safearea}>
      <Sermonheader/>
      <ActiveTab/>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Safearea:{
    flex:1,
    backgroundColor: 'white'
  }

})