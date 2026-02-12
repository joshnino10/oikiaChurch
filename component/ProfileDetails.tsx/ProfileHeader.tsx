import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProfileHeader() {
  return (
    <View style={styles.page}>
      <Text>ProfileHeader</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    page:{
        paddingHorizontal:16

    }
})