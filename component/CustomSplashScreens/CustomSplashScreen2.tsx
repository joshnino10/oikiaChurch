import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomSplashScreen2() {
  return (
    <View style={styles.content}> 
     <StatusBar barStyle='dark-content' backgroundColor='white' />
    <Image style={styles.icon} source={require('../../assets/images/churchlogo.png')}/>
      
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
    content:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    icon:{
        width:174,
        height:168
    },

  headerContainer: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    color: '#8C4616',
    fontWeight: 'bold',
  },

  title2: {
    fontSize: 18,
    color: '#8C4616',
    lineHeight: 17,
  },

})