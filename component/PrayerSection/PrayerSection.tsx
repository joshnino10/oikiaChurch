import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PrayerSection() {
  const [prayerRequest, setPrayerRequest] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = () => {
    if (prayerRequest.trim() === '') {
      Alert.alert('Empty Request', 'Please share your prayer request before submitting.')
      return
    }

    // Here you would typically send the prayer request to your backend
    console.log('Prayer request submitted:', { name, prayerRequest })
    Alert.alert(
      'Prayer Request Received',
      'Thank you for sharing. Our team will be praying for you.',
      [{ text: 'Amen', onPress: () => {} }]
    )
    setPrayerRequest('')
    setName('')
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/action logo 2.png')}
              style={styles.logo}
            />
            <Text style={styles.subtitle}>
              Share your prayer request and our team will lift you up in prayer
            </Text>
          </View>

          {/* Name Input (Optional) */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Your Name (Optional)</Text>
            <TextInput
              style={styles.nameInput}
              placeholder="Enter your name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Prayer Request Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Prayer Request</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="I would like prayer for..."
                placeholderTextColor="#999"
                multiline
                value={prayerRequest}
                onChangeText={setPrayerRequest}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Submit Prayer Request</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    // flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  nameInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    color: '#000000',
  },
  textInputContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 20,
    minHeight: 200,
  },
  textInput: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    color: '#000000',
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
})