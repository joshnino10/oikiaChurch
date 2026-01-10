import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Header() {
  // You'll need some state or prop to determine which image to show
  const isDarkMode = false; // Change this based on your theme logic

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Oikia Church</Text>
      </View>
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image 
            source={
              isDarkMode 
                ? require('../../assets/images/brown brightness.png')
                : require('../../assets/images/light brightness.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageContainer}>
          <Image 
            source={require('../../assets/images/light brightness bell.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
   
  },
  titleContainer: {
    // marginBottom: 12,
  },
  title: {
    fontFamily: 'NotoBold',
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16, // Space between icons
  },
  imageContainer: {
    padding: 8,
    backgroundColor:'#F5F5F5',
    borderRadius:2000
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
})