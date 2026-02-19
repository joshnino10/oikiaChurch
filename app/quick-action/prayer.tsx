import PrayerSection from '@/component/PrayerSection/PrayerSection';
import { useTheme } from '@/component/context/ThemeProvider';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

export default function Prayer() {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.secondary}
      />
      <PrayerSection />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1
  },
});
