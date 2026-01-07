import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "@/component/CustomInput/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { router, useRouter } from "expo-router";

export default function Login() {
 const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle login
  const handleLogin = async () => {
    // Trim whitespace
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validation
    if (!trimmedEmail) {
      Alert.alert("Validation Error", "Please enter your email address");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      Alert.alert("Validation Error", "Please enter a valid email address");
      return;
    }

    if (!trimmedPassword) {
      Alert.alert("Validation Error", "Please enter your password");
      return;
    }

    if (trimmedPassword.length < 8) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 8 characters long"
      );
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with your actual API endpoint
      // Example API call:
      /*
        const response = await fetch('https://your-api.com/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: trimmedEmail,
            password: trimmedPassword,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Store token/user data
          // await AsyncStorage.setItem('userToken', data.token);
          // await AsyncStorage.setItem('userData', JSON.stringify(data.user));
          
          // Navigate to home screen
          // navigation.replace('Home');
          Alert.alert('Success', 'Login successful!');
        } else {
          Alert.alert('Login Failed', data.message || 'Invalid credentials');
        }
        */

      // Simulated API call (remove this in production)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Login attempt:", { email: trimmedEmail });
      Alert.alert("Success", "Login successful!");
      router.replace('/(tabs)/home')

      // TODO: Navigate to home screen after successful login
      // navigation.replace('Home');
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Error",
        error.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    // TODO: Navigate to forgot password screen
    // navigation.navigate('ForgotPassword');
    console.log("Forgot password pressed");
    Alert.alert(
      "Forgot Password",
      "You will be redirected to reset your password.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: () => console.log("Navigate to forgot password"),
        },
      ]
    );
  };

  // Handle sign up
  const handleSignUp = () => {
    router.replace('/(auth)/singup')
  
    
  };

  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    console.log("Google sign in pressed");
    // TODO: Implement Google Sign In
    /*
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        // Send token to your backend
        // Handle authentication
      } catch (error) {
        console.error('Google sign in error:', error);
      }
      */
    Alert.alert(
      "Google Sign In",
      "Google authentication will be implemented here."
    );
  };

  // Handle Apple sign in
  const handleAppleSignIn = async () => {
    console.log("Apple sign in pressed");
    // TODO: Implement Apple Sign In
    /*
      try {
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        // Send token to your backend
        // Handle authentication
      } catch (error) {
        console.error('Apple sign in error:', error);
      }
      */
    Alert.alert(
      "Apple Sign In",
      "Apple authentication will be implemented here."
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <StatusBar barStyle="light-content" backgroundColor="#261306" />

      {/* HEADER */}
      <View style={styles.headercontent}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/churchlogo.png")}
          resizeMode="contain"
        />

        <View style={styles.TitleContainer}>
          <Text style={styles.Title}>OIKIA</Text>
          <View>
            <Text style={styles.Subtitle}>CHRISTIAN</Text>
            <Text style={styles.Subtitle}>CENTRE</Text>
          </View>
        </View>
      </View>

      {/* LOGIN CARD */}
      <ScrollView
        style={styles.loginDetails}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentContainer}>
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.descText}>
              Sign in to continue your faith journey
            </Text>
          </View>

          {/* Input Section */}
          <View style={styles.inputSection}>
            <CustomInput
              label="Email Address"
              placeholder="yourname@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
              leftIcon={
                <Ionicons name="mail-outline" size={20} color="#B3B3B3" />
              }
            />

            <CustomInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
              leftIcon={<Feather name="lock" size={20} color="#B3B3B3" />}
              rightIcon={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#B3B3B3"
                  />
                </TouchableOpacity>
              }
            />

            {/* Forgot Password */}
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={[
              styles.loginButton,
              isLoading && styles.loginButtonDisabled,
            ]}
            onPress={handleLogin}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.loginButtonText}>Sign In</Text>
            )}
          </TouchableOpacity>

          {/* Divider with OR */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleSignIn}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("../../assets/images/googleicon.png")}
              />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleAppleSignIn}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <Ionicons name="logo-apple" size={22} color="#000000" />
              <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={handleSignUp}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.bibleVerse}>
            "I am the way, the truth, and the life." - John 14:6
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },

  headercontent: {
    height: 340,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#261306",
  },

  icon: {
    width: 95,
    height: 90,
  },

  TitleContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  Title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 23,
    color: "#FFFFFF",
  },

  Subtitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 11,
    color: "#FFFFFF",
    lineHeight: 14,
  },

  loginDetails: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  welcomeSection: {
    marginBottom: 24,
  },

  welcomeText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
    color: "#000000",
  },

  descText: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },

  inputSection: {
    marginBottom: 20,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 8,
    paddingVertical: 4,
  },

  forgotPasswordText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 13,
    color: "#261306",
  },

  loginButton: {
    backgroundColor: "#261306",
    width: 157,
    height: 48,
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    minHeight: 54,
  },

  loginButtonDisabled: {
    opacity: 0.7,
  },

  loginButtonText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },

  dividerText: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#000000",
    marginHorizontal: 16,
  },

  socialButtonsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
    gap: 8,
  },

  socialButtonText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    color: "#333333",
  },

  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },

  signUpText: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#666666",
  },

  signUpLink: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    color: "#261306",
  },
  bibleVerse:{
    fontFamily: 'PoppinsItalic',
    textAlign:'center',
    marginTop:15,
    fontSize:12,
    color: '#000000'

  }
});
