import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../styledButton";

const CarItem = (props) => {
  const { name, tagline, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          text="CUSTOM ORDER"
          onPress={() => {
            console.warn("custom order is pressed");
          }}
        />
        <StyledButton
          type="secondary"
          text="EXISTING INVENTORY"
          onPress={() => {
            console.warn("Existing Inventory is pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
