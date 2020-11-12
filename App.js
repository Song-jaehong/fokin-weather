import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>SECTION - 1</Text>
      </View>
      <View style={styles.sectionBlack}>
        <Text>SECTION - 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionBlack: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
