import { Stack } from "expo-router";
import {
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  Poppins_500Medium_Italic,
 
  useFonts
} from "@expo-google-fonts/poppins";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import CustomSplashScreen1 from "@/component/CustomSplashScreens/CustomSplashScreen1";
import CustomSplashScreen2 from "@/component/CustomSplashScreens/CustomSplashScreen2";

export default function RootLayout() {
  const [currentSplash, setCurrentSplash] = useState(1);

  const [fontsLoaded] = useFonts({
    PoppinsThin: Poppins_100Thin,
    PoppinsLight: Poppins_300Light,
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
    PoppinsExtraBold: Poppins_800ExtraBold,
    PoppinsBlack: Poppins_900Black,
    PoppinsItalic: Poppins_500Medium_Italic
   
  });

  
  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
    })();
  }, []);

 
  useEffect(() => {
    if (fontsLoaded) {
      const timer1 = setTimeout(() => setCurrentSplash(2), 4500); // Splash 1 → Splash 2
      const timer2 = setTimeout(() => setCurrentSplash(0), 7000); // Splash 2 → App

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [fontsLoaded]);

 
  useEffect(() => {
    if (currentSplash === 0) {
      SplashScreen.hideAsync();
    }
  }, [currentSplash]);

  // Show custom splash screens
  if (!fontsLoaded) return null;
  if (currentSplash === 1) return <CustomSplashScreen1 />;
  if (currentSplash === 2) return <CustomSplashScreen2 />;

  // Show main app
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
