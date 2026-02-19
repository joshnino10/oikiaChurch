import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeProvider";

export default function PaymentMethod() {
  const {theme} = useTheme()


  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);

  const paymentMethods = [
    { id: "1", title: "Credit / Debit Card", subtitle: "Secure payment", icon: "card-outline" },
    { id: "2", title: "Bank Transfer", subtitle: "Directly from your bank", icon: "card-outline" },
  ];

  const handlePay = () => {
    const selectedMethod = paymentMethods.find(pm => pm.id === selectedId);
    if (selectedMethod) {
      Alert.alert(
        "✅ Payment Selected",
        `You chose: ${selectedMethod.title}`,
        [
          {
            text: "OK",
            onPress: () => {
              router.replace("/giving-page/givingpage");
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.page}>
      {paymentMethods.map((item) => {
        const isSelected = selectedId === item.id;

        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            style={[styles.card, isSelected && styles.activeCard, ]}
            onPress={() => setSelectedId(item.id)}
          >
            <View style={styles.row}>
              <Ionicons
                name={item.icon}
                size={24}
                color="#000"
                style={{ marginRight: 12 }}
              />
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
              {isSelected && <Ionicons name="checkmark-circle" size={24} color="#8C4616" />}
            </View>
          </TouchableOpacity>
        );
      })}

      {/* Give Now Button */}
      <TouchableOpacity
        style={[styles.payButton, !selectedId && styles.payButtonDisabled]}
        activeOpacity={0.8}
        disabled={!selectedId}
        onPress={handlePay}
      >
        <Text style={styles.payButtonText}>Give Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
   
  },

  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    padding: 16,
    height: 100,
    marginBottom: 12,
  },

  activeCard: {
    borderWidth: 1,
    borderColor: "#8C4616",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textWrapper: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },

  subtitle: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
  },

  payButton: {
    marginTop: 20,
    backgroundColor: "#8C4616",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    alignSelf: "stretch", // stretch across container
    marginBottom: 80,
  },

  payButtonDisabled: {
    backgroundColor: "#999",
  },

  payButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
