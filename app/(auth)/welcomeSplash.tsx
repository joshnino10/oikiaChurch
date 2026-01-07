import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function WelcomeSplash() {
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();

    // Redirect after delay
    const timer = setTimeout(() => {
      router.replace('/(auth)/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, );

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Image
          source={require('../../assets/images/churchlogo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Welcome to Church</Text>
       
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261306',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 174,
    height: 168,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight:'600',
    fontFamily: 'PoppinsSemiBold',
    marginBottom:5,
  },


});
