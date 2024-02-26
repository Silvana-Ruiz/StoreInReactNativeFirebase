import React from "react";
import * as RN from "react-native";
import { database } from '../config/fb';
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

export default function Product({ id, emoji, name, price, isSold }) {
  return (
    <RN.View style={styles.productContainer}>
      <RN.Text style={styles.emoji}>{emoji}</RN.Text>
      <RN.Text style={styles.name}>{name}</RN.Text>
      <RN.Text style={styles.price}>${price}</RN.Text>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8
  },
  emoji: {
    fontSize: 100
  },
  name: {
    fontSize: 32,
    fontWeight: "bold"
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray'
  },
  button: {
    backgroundColor: "#0FA5E9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",

  }
});