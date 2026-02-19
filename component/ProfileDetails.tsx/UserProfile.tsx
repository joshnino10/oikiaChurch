import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Text,
  Animated
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { userprofile } from './users'
import { useTheme } from '../context/ThemeProvider'

export default function UserProfile() {
  const {theme} = useTheme()
  const [selectedImage, setSelectedImage] = useState(null)
  const fadeAnim = useState(new Animated.Value(1))[0]

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Allow access to your photos.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        setSelectedImage(result.assets[0].uri)

        // Fade back in
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }).start()
      })
    }
  }

  return (
    <View>
      {userprofile.map((item) => (
        <View key={item.id} style={styles.container}>
          
          <TouchableOpacity
            onPress={pickImage}
            activeOpacity={0.85}
          >
            <View style={styles.imgContainer}>
              
              <Animated.Image
                style={[styles.img, { opacity: fadeAnim }]}
                source={
                  selectedImage
                    ? { uri: selectedImage }
                    : item.profileImage
                }
              />

              <View style={styles.iconWrapper}>
                <Image
                  style={styles.icon}
                  source={require('../../assets/images/edit profile picture.png')}
                />
              </View>

            </View>
          </TouchableOpacity>

          <Text style={[styles.Username, {color: theme.colors.text}]}>{item.userName}</Text>

          <View style={styles.activeWrapper}>
            <View style={styles.background}>
                <Text style={styles.backgroundtext}>ACTIVE PARTNER</Text>
            </View>
            <Text style={styles.activeDate}>{item.Joined}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.meditatedBox}>
                <Text style={styles.title}>WORD MEDITATED</Text>
                <Text style={styles.counts}>{item.wordMedicated}</Text>
            </View>
            <View style={styles.journalBox}>
                <Text style={styles.title2}>JOURNAL ENTERIES</Text>
                <Text style={styles.counts2}>{item.journalEnteries}</Text>
            </View>

          </View>




        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },

  imgContainer: {
 
    borderRadius:20,
    borderColor:'#261306',
    position: 'relative',
  
  },

  img: {
    borderRadius:20,
    width: 123,
    height: 123,
     
  },

  iconWrapper: {
    position: 'absolute',
    bottom: -6,
    right: -9,

  
  },

  icon: {
    width: 31,
    height: 31,
  },

  Username: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  activeWrapper:{
    marginTop:10,
    flexDirection:'row',
    gap:5,
    alignItems:'center',
  },

  background:{
    backgroundColor:'#F8DBC8',
    paddingHorizontal:8,
    paddingVertical:5,
    borderRadius:20
  },
  backgroundtext:{
    fontFamily:'PoppinsSemiBold',
    fontWeight:'600',
    fontSize:10,
    color:'#8C4616'

  },
  activeDate:{
    fontFamily:'poppinsSemiBold',
    fontWeight:'600',
    fontSize:10,
    color:"#757575"
  },

  row:{
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20
  },

  meditatedBox:{
    backgroundColor:'#F8DBC8',
    paddingHorizontal:25,
    paddingVertical:25,
    borderRadius:30

  },
  journalBox:{
      backgroundColor:'#F5F5F5',
      paddingHorizontal:25,
      paddingVertical:25,
      borderRadius:30


  },
  title:{
    fontFamily:'PoppinsSemiBold',
    fontSize:12,
    fontWeight:600,
    color:'#8C4616'


  },
  title2:{
    fontFamily:'PoppinsSemiBold',
    fontSize:12,
    fontWeight:600,
    color:'#261306'

  },
  counts:{
    marginTop:10,
    fontFamily:'NetoBold',
    fontWeight:'600',
    fontSize:33,
    fontStyle:'italic',
    color:'#8C4616'

  },
  counts2:{
    marginTop:10,
    fontFamily:'NetoBold',
    fontWeight:'600',
    fontSize:33,
    color:'#261306',
    fontStyle:'italic',

  }
})
