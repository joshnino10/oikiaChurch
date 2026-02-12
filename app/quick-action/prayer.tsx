import {  StyleSheet, View } from 'react-native'
import React from 'react'
import PrayerSection from '@/component/PrayerSection/PrayerSection'

export default function Prayer() {
  return (
    <View style={styles.page}>
      <PrayerSection/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'white'
  }
})