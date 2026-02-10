import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GivingHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Generosity</Text>

      <View style={styles.card}>
        <ImageBackground
          source={require('../../assets/images/backgroundimage.png')}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
        
          <View style={styles.overlay} />

          <View style={styles.content}>
            <Text style={styles.title}>
              Generosity is a{'\n'}Spiritual act
            </Text>

            <Text style={styles.subtitle}>
              Partner with Oikia to touch lives across the globe.
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  headerText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    color: '#000000'

  },

  card: {
    marginTop: 12,
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  imageBackground: {
    height: 180,
  
  },

  imageStyle: {
    borderRadius: 14,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
   
  },

  content: {
    padding: 16,
  },

  title: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 32,
    lineHeight: 38,
    color: '#000000',
    marginBottom: 15,
  },

  subtitle: {
    fontFamily: 'PoppinsRegular',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
    lineHeight: 22,
    maxWidth: '90%',
  },
})
