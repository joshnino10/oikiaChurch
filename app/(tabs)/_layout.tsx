import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Tablayout() {
  return (
    <Tabs>
     <Tabs.Screen name='home' />
     <Tabs.Screen name='sermon' />
     <Tabs.Screen name='giving' />
     <Tabs.Screen name='note'/>
     <Tabs.Screen name='profile'/>
    </Tabs>
  )
}

const styles = StyleSheet.create({})