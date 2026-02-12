import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TestimoneySection from '@/component/TestimoneySection/TestimoneySection'

export default function Testimonies() {
  return (
    <View style={styles.page}>
      <TestimoneySection/>     
    </View>
  )
}

const styles = StyleSheet.create({

  page:{
    flex:1,
    backgroundColor:'white'
  }
    
})