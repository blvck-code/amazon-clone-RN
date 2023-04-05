import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { data } from "../data/CarouselData";

const CarouselCard = () => {
  return (
    <View>
      <SliderBox images={data} />
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});
