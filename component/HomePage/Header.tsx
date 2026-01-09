import { Image, StyleSheet, Text, View } from 'react-native'
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
        <View style={styles.imageContainer}>
          <Image 
            source={
              isDarkMode 
                ? require('../../assets/images/brown brightness.png')
                : require('../../assets/images/light brightness.png')
            }
            style={styles.icon}
          />
        </View>

        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/images/light brightness bell.png')}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
   
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16, 
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