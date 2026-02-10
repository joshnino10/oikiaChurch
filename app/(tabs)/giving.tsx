import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GivingHeader from '@/component/GivingPage/GivingHeader'
import GenerousGiving from '@/component/GivingPage/GenerousGiving'

export default function Giving() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView style={{marginBottom:0}}>
        <GivingHeader/>
        <GenerousGiving/>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor: 'white'
  }
})