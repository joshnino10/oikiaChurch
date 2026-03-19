import GenerousGiving from '@/component/GivingPage/GenerousGiving';
import GivingHeader from '@/component/GivingPage/GivingHeader';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, Platform } from 'react-native';
import { useTheme } from '@/component/context/ThemeProvider';

export default function Giving() {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: theme.colors.background }}
      >
        <GivingHeader />
        <GenerousGiving />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop:Platform.OS === 'android'? 50:0
  },
});
