import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { categoryData, dealData, devicesDealData } from "../data/CarouselData";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CategoryCard from "../components/CategoryCard";

const HomeScreen = ({ navigation }) => {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <DeliveryAddressCard />
      <ScrollView
        style={styles.categoryContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {categoryData.map((dat) => (
          <CategoryCard key={dat.text} img={dat.img} text={dat.text} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
