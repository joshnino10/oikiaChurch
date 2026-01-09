import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/component/HomePage/Header'

export default function Home() {
  return (
    <SafeAreaView style={styles.Safearea}>
      <View style={styles.page}>
        <Header/>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    Safearea:{
        flex:1,
        backgroundColor:'white'
        
    },

    page:{
      paddingHorizontal:16
    }

})