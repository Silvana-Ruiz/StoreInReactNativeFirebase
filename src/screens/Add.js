import React from "react";
import * as RN from "react-native";
import EmojiPicker, { EmojiKeyboard } from "rn-emoji-keyboard";

export default function Add() {
  const [newItem, setNewItem] = React.useState({
    emoji: '😊',
    name: '',
    price: 0,
    isSold: false,
    createAt: new Date()
  });
  const [isOpen, setIsOpen] = React.useState(false);

  // Function to update selected emoji
  const handlePick = (emojiObject) => {
    setNewItem({
      ...newItem,
      emoji: emojiObject.emoji
    });
  };

  const onSend = async () => {
    
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Add a New Product</RN.Text>
      <RN.Text style={styles.emoji} onPress={() => setIsOpen(true)}>{newItem.emoji}</RN.Text>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        placeholder="Product Name"
        style={styles.inputContainer}
      />
      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
        placeholder="Price"
        style={styles.inputContainer}
        keyboardType="number-pad"
      />
      <RN.Button
        title="Publish"
        onPress={onSend}
      />
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: '700'
  },
  inputContainer: {
    width: '90%',
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6
  },
  emoji: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginVertical: 6
  }
});