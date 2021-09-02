import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SectionedList } from "./src/features/mainscreen";

export default function App() {
  return (
    <SectionedList />

    //<View style={styles.container}>
    //  <Text>Replace this with a Sectioned List!</Text>
    //  <StatusBar style="auto" />
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
