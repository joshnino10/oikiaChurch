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
  useFonts
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PoppinsThin: Poppins_100Thin,
    PoppinsRegular: Poppins_400Regular,
    PoppinsLight: Poppins_300Light,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
    PoppinsExtraBold: Poppins_800ExtraBold,
    PoppinsBlack: Poppins_900Black
  });

  useEffect(() => {
    if(loaded || error) {
      SplashScreen.preventAutoHideAsync()
    }
  }, [loaded, error])



  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
