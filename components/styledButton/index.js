import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const styledButton = (props) => {
  const type = props.type;
  const backgroundColor = type === "primary" ? "black" : "white";
  const color = type === "primary" ? "white" : "black";
  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={[styles.button, { backgroundColor: backgroundColor }]}
          onPress={() => props.onPress()}
        >
          <Text style={[styles.text, { color: color }]}>{props.text}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default styledButton;
