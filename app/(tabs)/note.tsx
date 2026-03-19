import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import NoteDetails from '@/component/NoteDetails/NoteDetails';
import { useTheme } from '@/component/context/ThemeProvider';

export default function Note() {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <NoteDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop:Platform.OS === 'android'? 10:0
  },
});
