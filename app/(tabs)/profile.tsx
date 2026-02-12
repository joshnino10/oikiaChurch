import { SafeAreaView, ScrollView, StatusBar, StyleSheet,  } from 'react-native'
import React from 'react'
import ProfileHeader from '@/component/ProfileDetails.tsx/ProfileHeader'

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='dark-content' backgroundColor="white"/>
      <ScrollView>
        <ProfileHeader />
      </ScrollView>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'white'
  }
})