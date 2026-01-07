import { View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headercontent}>
        <Image style={styles.icon} source={require('../../assets/images/churchlogo.png')}/>

        <View style={styles.TitleContainer}>
            <Text style={styles.Title}>OIKIA</Text>
            <View>
                <Text style={styles.Subtitle}>CHRISTIAN</Text>
                <Text style={styles.Subtitle}>CENTRE</Text>
            </View>
        </View>


      </View>

      <View style={styles.loginDetails}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    
  },

  headercontent: {
    height: 340,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#261306',
  },

  icon:{
    width:95,
    height:90


  },
  TitleContainer:{
    flexDirection:'row',
    marginTop:10,
    gap:4,
    alignItems: 'center',
    justifyContent:'center',
    textAlign:'center',

  },
  Title:{
    fontFamily:'PoppinsSemiBold',
    fontSize: 23,
    color:'#FFFFFF'

  },
  Subtitle:{
    fontFamily:'PoppinsSemiBold',
    fontSize: 11,
    color:'#FFFFFF',
    lineHeight:14

  },

  

  loginDetails: {
    flex: 1, // fill the rest of the screen
    backgroundColor: 'white',
    borderTopLeftRadius: 40,  // only top corners
    borderTopRightRadius: 40,
    overflow: 'hidden',        // ensures content respects radius
    marginTop: -33,            // slight overlap for a modern look
  },
});
