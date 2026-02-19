import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react';
import { useTheme } from '@/component/context/ThemeProvider';
import TestimoneySection from '@/component/TestimoneySection/TestimoneySection';

export default function Testimonies() {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  return (
    <View style={[styles.page, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <TestimoneySection />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
