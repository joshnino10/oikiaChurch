import Header from '@/component/HomePage/Header'
import QuickAction from '@/component/HomePage/QuickAction'
import TodayManner from '@/component/HomePage/TodayManner'
import UpcomingService from '@/component/HomePage/UpcomingService'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <Header/>
        <TodayManner/>
        <UpcomingService/>
        <QuickAction/>
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
    paddingBottom: 40,
  },
})
