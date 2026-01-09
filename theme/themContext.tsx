import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LightTheme, DarkTheme } from './colors';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const systemTheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(systemTheme === 'dark');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem('APP_THEME');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  };

  const toggleTheme = async () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    await AsyncStorage.setItem('APP_THEME', newTheme ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        colors: isDark ? DarkTheme : LightTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
