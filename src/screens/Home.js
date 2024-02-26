import React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <RN.Text>This is the home screen</RN.Text>
      <RN.Button title="Go to Add Screen" onPress={() => navigation.navigate('Add')} />
    </>
  );
}