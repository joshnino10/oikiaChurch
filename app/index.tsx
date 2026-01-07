import { SafeAreaView, StyleSheet,} from 'react-native'
import React from 'react'
import OnboardingScreen from '@/component/OnboardingScreen/OnboardingScreen'

export default function index() {
  return (
    <SafeAreaView style={styles.Safearea}>
        <OnboardingScreen/>    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Safearea:{
    flex:1,
    backgroundColor: 'white'
  },

})