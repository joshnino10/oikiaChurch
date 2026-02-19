import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { useTheme } from '../context/ThemeProvider'

export default function TestimoneySection() {
  const { theme } = useTheme()
  const router = useRouter()

  const [testimoney, setTestiomoney] = useState('')
  const [submitted, setSubmitted] = useState(false)


  const logoSource = submitted
    ? require('../../assets/images/action logo 2.png')          
    : theme.mode === 'dark'
      ? require('../../assets/images/action logo 2.png')      
      : require('../../assets/images/action logo 1.png')    

  const handleSubmit = () => {
    if (!testimoney.trim()) return
    Keyboard.dismiss()
    setSubmitted(true)

    setTimeout(() => {
      router.replace('/home')
    }, 3000)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.Container, { backgroundColor: theme.colors.secondary }]}>

          <View style={styles.center}>
            <Image
              style={styles.logo}
              source={logoSource}   
            />

            <Text style={[styles.headerText, { color: theme.colors.text }]}>
              Great is Thy Faithfulness
            </Text>
          </View>

          <View style={[styles.MessageContainer, { backgroundColor: theme.colors.quickBackground }]}>

            {submitted ? (
              <View style={styles.successContainer}>
                <Image
                  style={{ width: 61, height: 61 }}
                  source={require('../../assets/images/received small icon.png')}
                />
                <Text style={styles.successText}>Received!</Text>
                <Text style={styles.successSubText}>
                  Your message has been lifted to the team
                </Text>
              </View>
            ) : (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInput}
                    multiline
                    value={testimoney}
                    onChangeText={setTestiomoney}
                    placeholder="I want to share how God..."
                    placeholderTextColor="#999"
                  />
                </View>

                <TouchableOpacity
                  style={[
                    styles.button,
                    !testimoney.trim() && { opacity: 0.5 }
                  ]}
                  activeOpacity={0.8}
                  onPress={handleSubmit}
                  disabled={!testimoney.trim()}
                >
                  <Text style={styles.buttonText}>
                    Send to Oikia Team
                  </Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,                    // full height
  },

  center:{
    alignItems:'center',
    marginTop:80
  },

  logo:{
    width:90,
    height:90,
    resizeMode:'contain'
  },

  headerText:{
    marginTop:20,
    fontSize:18,
    fontWeight:'600',
    textAlign:'center',
    marginBottom:40,
  },

  MessageContainer:{
    flex: 1,                     // use flex instead of height 100%
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    padding:25,
    paddingBottom:30,
  },

  inputContainer:{
    width:'100%',
    height:270,
    backgroundColor:'#F2F2F2',
    borderRadius:15,
    padding:20,
    marginBottom:20
  },

  textInput:{
    flex:1,
    textAlignVertical:'top',
    fontSize:14,
    color:'#333'
  },

  button:{
    backgroundColor:'#D781E0',
    paddingVertical:14,
    borderRadius:10,
    alignItems:'center'
  },

  buttonText:{
    fontFamily: 'PoppinssemiBold',
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'600'
  },

  successContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  successText:{
    fontFamily:'PoppinsSemiBold',
    marginTop:10,
    fontSize:24,
    fontWeight:'600',
    color:'#222',
    marginBottom:15,
    textAlign:'center'
  },

  successSubText:{
    fontFamily: 'PoppinsMedium',
    fontSize:16,
    color:'#858484',
    textAlign:'center'
  }
})
