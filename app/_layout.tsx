import {
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts
} from "@expo-google-fonts/poppins";

import { 
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from '@expo-google-fonts/noto-serif';

import {
  MontserratAlternates_700Bold
} from '@expo-google-fonts/montserrat-alternates';


import { Stack } from "expo-router";

import CustomSplashScreen1 from "@/component/CustomSplashScreens/CustomSplashScreen1";
import CustomSplashScreen2 from "@/component/CustomSplashScreens/CustomSplashScreen2";
import { ThemeProvider } from "@/theme/themContext";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

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
    PoppinsItalic: Poppins_500Medium_Italic,
    NotoBold: NotoSerif_700Bold, 
    NotoRegular: NotoSerif_400Regular,
    MontserraBold: MontserratAlternates_700Bold
   
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
    <ThemeProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
    </ThemeProvider>
  );
}
