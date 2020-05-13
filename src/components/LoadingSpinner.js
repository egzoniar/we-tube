import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import StyleGuide from './StyleGuide'
const { palette } = StyleGuide

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={palette.accent3} />
      <Text style={styles.text}>Loading data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "column",
    // borderWidth: 1, borderColor: 'red'
  },
  text: {
    fontSize: 11,
    marginTop: 10,
    marginLeft: 10
  }
});

export default LoadingSpinner