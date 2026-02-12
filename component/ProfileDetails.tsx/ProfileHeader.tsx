import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserProfile from './UserProfile'

export default function ProfileHeader() {
  return (
    <View style={styles.page}>
      <Text style={styles.profile}>Profile</Text>
      <UserProfile/> 
    </View>
  )
}

const styles = StyleSheet.create({

    page:{
        paddingHorizontal:16

    },
    profile:{
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        color: '#000000'

    },
})