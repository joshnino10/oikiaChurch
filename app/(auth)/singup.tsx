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
  
  export default function Signup() {
    const router = useRouter()
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    // Signup handler
    const handleSignup = async () => {
      const trimmedName = fullName.trim();
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      const trimmedConfirm = confirmPassword.trim();
  
      if (!trimmedName) {
        Alert.alert("Validation Error", "Please enter your full name");
        return;
      }
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
        Alert.alert("Validation Error", "Password must be at least 8 characters");
        return;
      }
      if (!trimmedConfirm) {
        Alert.alert("Validation Error", "Please confirm your password");
        return;
      }
      if (trimmedPassword !== trimmedConfirm) {
        Alert.alert("Validation Error", "Passwords do not match");
        return;
      }
  
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        Alert.alert("Success", "Account created successfully! (Demo)");
      } catch (error) {
        Alert.alert("Error", "Something went wrong. Try again.");
      } finally {
        setIsLoading(false);
      }
    };
  
    // Google Sign In (Demo)
    const handleGoogleSignIn = () => {
      Alert.alert("Google Sign In", "Google authentication will be implemented here.");
    };
  
    // Apple Sign In (Demo)
    const handleAppleSignIn = () => {
      Alert.alert("Apple Sign In", "Apple authentication will be implemented here.");
    };
  
    // Navigate to Sign In (Demo)
    const handleSignInRedirect = () => {
     router.replace('/(auth)/login')
    };
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar barStyle="light-content" backgroundColor="#261306" />
  
        {/* HEADER */}
        <View style={styles.headercontent}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/churchlogo.png")}
          />
          <View style={styles.TitleContainer}>
            <Text style={styles.Title}>OIKIA</Text>
            <View>
              <Text style={styles.Subtitle}>CHRISTIAN</Text>
              <Text style={styles.Subtitle}>CENTRE</Text>
            </View>
          </View>
        </View>
  
        {/* FORM */}
        <ScrollView
          style={styles.loginDetails}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Join Our Community</Text>
            <Text style={styles.descText}>
              Sign up to start your spiritual journey
            </Text>
  
            <CustomInput
              label="Full Name"
              placeholder="John Doe"
              value={fullName}
              onChangeText={setFullName}
              leftIcon={<Ionicons name="person-outline" size={20} color="#B3B3B3" />}
            />
  
            <CustomInput
              label="Email Address"
              placeholder="yourname@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              leftIcon={<Ionicons name="mail-outline" size={20} color="#B3B3B3" />}
            />
  
            <CustomInput
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              leftIcon={<Feather name="lock" size={20} color="#B3B3B3" />}
              rightIcon={
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#B3B3B3"
                  />
                </TouchableOpacity>
              }
            />
  
            <CustomInput
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              leftIcon={<Feather name="lock" size={20} color="#B3B3B3" />}
              rightIcon={
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Ionicons
                    name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#B3B3B3"
                  />
                </TouchableOpacity>
              }
            />
  
            {/* Sign Up Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSignup}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.loginButtonText}>Sign Up</Text>
              )}
            </TouchableOpacity>
  
            {/* OR Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or continue with</Text>
              <View style={styles.dividerLine} />
            </View>
  
            {/* Social Buttons */}
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={handleGoogleSignIn}
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
                disabled={isLoading}
              >
                <Ionicons name="logo-apple" size={22} color="#000" />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>
  
            {/* Sign In Link */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleSignInRedirect}>
                <Text style={styles.signUpLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
  
            <Text style={styles.bibleVerse}>
            "Come to me, all who are weary and burdened." - 
            Matthew 11:28
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
  
    headercontent: {
      height: 340,
      backgroundColor: "#261306",
      justifyContent: "center",
      alignItems: "center",
    },
  
    icon: { width: 95, height: 90 },
  
    TitleContainer: { flexDirection: "row", marginTop: 10 },
  
    Title: { fontSize: 23, color: "#fff", fontFamily: "PoppinsSemiBold" },
  
    Subtitle: {
      fontSize: 11,
      color: "#fff",
      fontFamily: "PoppinsSemiBold",
      lineHeight: 14,
    },
  
    loginDetails: {
      flex: 1,
      backgroundColor: "#fff",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      marginTop: -50,
    },
  
    scrollContent: { paddingBottom: 40 },
  
    contentContainer: { padding: 16 },
  
    welcomeText: {
      fontSize: 20,
      fontFamily: "PoppinsSemiBold",
      marginBottom: 4,
    },
  
    descText: {
      fontSize: 14,
      color: "#666",
      marginBottom: 20,
      fontFamily: "PoppinsRegular",
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
        marginTop: 25,
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
  
    loginButtonText: {
      color: "#fff",
      fontSize: 16,
      fontFamily: "PoppinsSemiBold",
    },
  
    dividerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
  
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: "#E0E0E0",
    },
  
    dividerText: {
      marginHorizontal: 10,
      fontSize: 14,
      fontFamily: "PoppinsRegular",
      color: "#000",
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
      backgroundColor: "#fff",
      gap: 8,
    },
  
    socialButtonText: {
      fontFamily: "PoppinsSemiBold",
      fontSize: 14,
      color: "#333",
    },
  
    signUpContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 10,
    },
  
    signUpText: {
      fontFamily: "PoppinsRegular",
      fontSize: 14,
      color: "#666",
    },
  
    signUpLink: {
      fontFamily: "PoppinsSemiBold",
      fontSize: 14,
      color: "#261306",
    },
  
    bibleVerse: {
      textAlign: "center",
      fontSize: 12,
      marginTop: 20,
      fontFamily: "PoppinsItalic",
    },
  });
  