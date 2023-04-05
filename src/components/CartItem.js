import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CartItem = ({ img, text, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topCont}>
        <View style={styles.imageCont}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.contentCont}>
          <Text style={styles.itemTitleText}>{text}</Text>
          <Text style={styles.priceText}>KES. {price}</Text>
          <Text>Eligible for FREE Shhipping</Text>
        </View>
      </View>
      <View style={styles.bottomCont}>
        <View style={styles.itemCountCont}>
          <TouchableOpacity>
            <MaterialIcons name="remove" style={styles.iconDel} size={22} />
          </TouchableOpacity>
          <Text style={styles.countText}>1</Text>
          <TouchableOpacity>
            <MaterialIcons name="add" style={styles.iconAdd} size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.actionCont}>
          <TouchableOpacity style={styles.btnCont}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCont}>
            <Text>Save for later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "white",
    borderBottomWidth: 10,
    backgroundColor: "#ededed",
  },
  topCont: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  imageCont: {
    flex: 1,
  },
  contentCont: {
    flex: 2,
    marginLeft: 10,
    padding: 10,
  },
  itemTitleText: {
    flex: 1,
    fontWeight: "600",
  },
  priceText: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  bottomCont: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  itemCountCont: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  iconDel: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    backgroundColor: "#e6e5e3",
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  iconAdd: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    backgroundColor: "#e6e5e3",
    paddingLeft: 5,
    paddingRight: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  countText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    paddingLeft: 15,
    paddingRight: 15,
    height: "100%",
  },
  actionCont: {
    flex: 2,
    padding: 5,
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btnCont: {
    borderWidth: 1,
    borderColor: "#c9c9c9",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});
