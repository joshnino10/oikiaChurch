import Header from "@/component/HomePage/Header";
import QuickAction from "@/component/HomePage/QuickAction";
import TodayManner from "@/component/HomePage/TodayManner";
import UpcomingService from "@/component/HomePage/UpcomingService";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
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
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    flexGrow: 1, // VERY IMPORTANT for proper scroll behavior
    paddingBottom: 40,
  },
  container: {
    paddingHorizontal: 16, // consistent horizontal spacing
  },
});
