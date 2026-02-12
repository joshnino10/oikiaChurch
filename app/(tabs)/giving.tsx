import GenerousGiving from '@/component/GivingPage/GenerousGiving'
import GivingHeader from '@/component/GivingPage/GivingHeader'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

export default function Giving() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
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