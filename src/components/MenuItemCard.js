import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuItemCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.menuText}>MenuItemCard</Text>
        <Image
          style={{ height: 132, width: "100%" }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uenD_Xlrb9YWq5JHjQsUNt_2ZMFmWgKiW2SBAcJjhYfgW3cqcOb1f27RuyfxplBJR_w&usqp=CAU",
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
    margin: 8,
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
