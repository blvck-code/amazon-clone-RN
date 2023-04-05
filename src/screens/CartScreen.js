import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CartItem from "../components/CartItem";
import { cartData } from "../data/CartData";

const CartScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      header: () => (
        <View
          style={{
            backgroundColor: "rgba(5, 250, 242, 0.4)",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
          }}>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              margin: 15,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#B8BABA",
              paddingLeft: 15,
              backgroundColor: "white",
              borderRadius: 5,
              height: 40,
            }}>
            <MaterialIcons name="search" size={20} color={"gray"} />
            <TextInput
              style={{
                width: "92%",
                height: "90%",
                borderWidth: 0,
                paddingLeft: 10,
                backgroundColor: "white",
                paddingBottom: 2,
              }}
              placeholder="Seach Amazon.com"
              placeholderTextColor={"gray"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "10%",
            }}>
            <MaterialIcons name="mic-none" size={26} />
          </View>
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <DeliveryAddressCard />
      <View style={styles.subCont}>
        <Text style={styles.titleText}>Subtotal</Text>
        <Text style={styles.priceText}>KES. 6,000</Text>
      </View>
      <View style={styles.deliveryCont}>
        <View>
          <MaterialIcons name="verified" color={"teal"} size={22} />
        </View>
        <View>
          <Text style={styles.deliveryText}>
            Your order is eligible for FREE delivery
          </Text>
        </View>
      </View>
      <View style={styles.buyBtn}>
        <TouchableOpacity style={styles.btnCont}>
          <Text style={styles.btnText}>Proceed to buy (2 items)</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {cartData.map((data) => (
          <CartItem
            key={data.title}
            img={data.img}
            text={data.title}
            price={data.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subCont: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  deliveryCont: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  deliveryText: {
    color: "teal",
    marginLeft: 5,
  },
  buyBtn: {
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingTop: 10,
  },
  btnCont: {
    backgroundColor: "gold",
    marginLeft: "5%",
    marginRight: "5%",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
  },
  btnText: {},
});
