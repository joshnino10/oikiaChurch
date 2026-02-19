import ActiveTab from '@/component/SermonPage/ActiveTab';
import Sermonheader from '@/component/SermonPage/Sermonheader';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useTheme } from "@/component/context/ThemeProvider";

export default function Sermon() {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === "dark";

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <Sermonheader />
      <ActiveTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
