import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>profile</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'white'
  }
})