import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../context/ThemeProvider';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* TITLE */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Oikia Church
        </Text>
      </View>

      {/* ICONS */}
      <View style={styles.iconsContainer}>
        {/* THEME TOGGLE */}
        <TouchableOpacity
          onPress={toggleTheme}
          activeOpacity={0.7}
          style={[styles.imageContainer, { backgroundColor: theme.colors.primary }]}
        >
          <Image
            source={
              isDarkMode
                ? require('../../assets/images/brown brightness.png')
                : require('../../assets/images/light brightness.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* NOTIFICATION */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log('Notification pressed')}
          style={[styles.imageContainer, { backgroundColor: theme.colors.primary, marginLeft: 16 }]}
        >
          <Image
            source={
              isDarkMode
                ? require('../../assets/images/brown bell.png')
                : require('../../assets/images/light brightness bell.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  titleContainer: {},

  title: {
    fontFamily: 'NotoBold',
    fontSize: 20,
    fontWeight: '700',
  },

  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageContainer: {
    padding: 8,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
