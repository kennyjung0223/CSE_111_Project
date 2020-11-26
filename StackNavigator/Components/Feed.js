import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Your next trip is in Japan!</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Recommendations")}
      >
        <Text>View Reccomendations</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 200,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
  },
});
