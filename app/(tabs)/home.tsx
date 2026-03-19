import Header from "@/component/HomePage/Header";
import QuickAction from "@/component/HomePage/QuickAction";
import TodayManner from "@/component/HomePage/TodayManner";
import UpcomingService from "@/component/HomePage/UpcomingService";
import React from "react";
import { useTheme } from "@/component/context/ThemeProvider";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === "dark";

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.safeArea,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <StatusBar
        barStyle = {isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <View style={styles.container}>
          <Header />
          <TodayManner />
          <UpcomingService />
          <QuickAction />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
  },
});
