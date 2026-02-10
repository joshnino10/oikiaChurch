import GivingPageDetails from '@/component/GivingPage/GivingPageDetails'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function GivingPage() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <Text style={styles.headertext}>Generosity</Text>
      <GivingPageDetails/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
        backgroundColor:'white',
        
    },
    
    headertext:{
        fontSize:16,
        fontFamily:'poppinsSemiBold',
        fontWeight: '600',
        color: '#000000',
        paddingHorizontal:16
    }

})