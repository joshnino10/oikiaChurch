import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import ProfileHeader from '@/component/ProfileDetails.tsx/ProfileHeader';
import Sanctuary from '@/component/ProfileDetails.tsx/Sanctuary';
import { useTheme } from '@/component/context/ThemeProvider';

export default function Profile() {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <ScrollView
        contentContainerStyle={{ backgroundColor: theme.colors.background }}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader />
        <Sanctuary />
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
