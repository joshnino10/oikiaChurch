import ActiveTab from '@/component/SermonPage/ActiveTab'
import Sermonheader from '@/component/SermonPage/Sermonheader'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native'

export default function Sermon() {
  return (
    <SafeAreaView style={styles.Safearea}>
      <StatusBar barStyle='dark-content' backgroundColor="white" />
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