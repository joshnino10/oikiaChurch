import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '@/component/HomePage/Header'
import TodayManner from '@/component/HomePage/TodayManner'
import UpcomingService from '@/component/HomePage/UpcomingService'

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <Header />
        <TodayManner />
        <UpcomingService/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
  
    paddingBottom: 20,
  },
})
