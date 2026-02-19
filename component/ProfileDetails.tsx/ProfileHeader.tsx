import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserProfile from './UserProfile'
import { useTheme } from '../context/ThemeProvider'

export default function ProfileHeader() {
  const {theme} = useTheme()
  return (
    <View style={styles.page}>
      <Text style={[styles.profile, {color: theme.colors.text}]}>Profile</Text>
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