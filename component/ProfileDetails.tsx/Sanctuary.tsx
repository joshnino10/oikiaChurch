import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
export default function Sanctuary() {
  const {theme} = useTheme()

    const mySanctuary = [
        {
            id:'1',
            icon: require('../../assets/images/prayer icon.png'),
            title: 'Prayer Chamber',
            subtitle:'Manage your prayer requests'
        },
        {
            id:'2',
            icon: require('../../assets/images/convenant icon.png'),
            title: 'Covenant Partnership',
            subtitle:'Your impact journey'
        },
        {
            id:'3',
            icon: require('../../assets/images/heaven icon.png'),
            title: 'Heavenly Signal',
            subtitle:'Notification preferences'
        },
        {
            id:'4',
            icon: require('../../assets/images/spiritual icon.png'),
            title: 'Spiritual Support',
            subtitle:'Get in touch with us'
        },
        {
            id:'5',
            icon: require('../../assets/images/signout icon.png'),
            title: 'Sign Out',
            subtitle:'Return later'
        },
    ]

  return (
    <View style={styles.Container}>
      <Text style={[styles.headerText, {color: theme.colors.text}]}>My Sanctuary</Text>

      {mySanctuary.map((item) => (
        <TouchableOpacity 
          key={item.id}
          style={styles.card}
          activeOpacity={0.7}
        >
          <View style={styles.row}>

            <View style={styles.IconContainer}>
              <Image style={styles.icon} source={item.icon}/>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <Image style={{width:12, height:24}} source={require('../../assets/images/arrow.png')}/>

          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginTop:30,
        paddingHorizontal:16,
        marginBottom:70
    },

    headerText:{
        fontFamily:'PoppinsSemiBold',
        fontSize:18,
        fontWeight:'600',
        color:'#000000',
        marginBottom:20
    },

    card:{
        backgroundColor:'#F5F5F5',
        marginBottom:15,
        padding:20,
        borderRadius:16,
        
    },

    row:{
        flexDirection:'row',
        alignItems:'center'
    },

    IconContainer:{
        backgroundColor:'#D9D9D9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        height:42,
        width:42,
        marginRight:15
    },

    icon:{
        width:24,
        height:24,
        resizeMode:'contain'
    },

    textContainer:{
        flex:1
    },

    title:{
        fontFamily:'PoppinsSemiBold',
        fontSize:14,
        fontWeight:'600',
        color:'#222'
    },

    subtitle:{
        fontFamily:'PoppinsRegular',
        fontSize:11,
        color:'#000000',
        marginTop:4,
        fontWeight:'400',
    }
})
