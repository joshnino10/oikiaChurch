import GivingPageDetails from '@/component/GivingPage/GivingPageDetails'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, } from 'react-native'
import { useTheme } from '@/component/context/ThemeProvider'


export default function GivingPage() {
  const {theme} = useTheme()

  return (
    <SafeAreaView style={[styles.SafeArea, {backgroundColor:theme.colors.background}]}>
        <Text style={[styles.headertext, {color:theme.colors.text}]}>Generosity</Text>
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
        fontSize:20,
        fontFamily:'poppinsSemiBold',
        fontWeight: '600',
        color: '#000000',
        paddingHorizontal:16
    }

})