import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DeliveryAddressCard = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="location-pin" size={20} />
      <Text style={styles.deliverText}>Deliver to AV Codes - US</Text>
      <MaterialIcons name="keyboard-arrow-down" size={20} />
    </View>
  );
};

export default DeliveryAddressCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(155, 222, 225, 0.7)",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 5,
  },
  dliverText: {},
});
