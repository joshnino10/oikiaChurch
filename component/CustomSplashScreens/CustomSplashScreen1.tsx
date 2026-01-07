import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomSplashScreen1() {
  return (
    <View style={styles.content}> 
      <Text>CustomSplashScreen1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor: 'blue'
    }

})