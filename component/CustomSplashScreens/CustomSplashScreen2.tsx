import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomSplashScreen2() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' translucent={false} />
      
      <Image
        style={styles.logo}
        source={require('../../assets/images/churchlogo.png')}
        resizeMode="contain"
      />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>OIKIA</Text>
        <View>
          <Text style={styles.title2}>CHRISTIAN</Text>
          <Text style={styles.title2}>CENTRE</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 174,
    height: 168,
    marginBottom:25, 
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:1,
  },

  title: {
    fontSize: 40,
    fontFamily: 'PoppinsSemiBold', 
    color: '#8C4616',
  },

  title2: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    color: '#8C4616',
    lineHeight: 22,
  },
})
