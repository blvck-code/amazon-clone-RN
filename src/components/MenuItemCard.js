import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuItemCard = ({ text, img }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.menuText}>{text}</Text>
        <Image
          style={{ height: 132, width: "100%", resizeMode: "contain" }}
          source={{
            uri: img,
          }}
        />
      </View>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 110,
    backgroundColor: "white",
    shadowColor: "black",
    padding: 5,
    margin: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  menuText: {
    fontWeight: "600",
    paddingLeft: 8,
    paddingTop: 5,
  },
});
