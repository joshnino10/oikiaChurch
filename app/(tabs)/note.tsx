import { SafeAreaView, StatusBar, StyleSheet,  } from 'react-native'
import React from 'react'
import NoteDetails from '@/component/NoteDetails/NoteDetails'

export default function Note() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <StatusBar barStyle='dark-content' backgroundColor="white"/>
      <NoteDetails/>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'white'
  }
})