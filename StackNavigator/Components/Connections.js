import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SwipeCards from "./SwipeCards.js";

export default class Connections extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SwipeCards />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("ConnectionsList")}
        >
          <Text style={styles.text}>View Connections</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    width: 200,
    height: 75,
    backgroundColor: "#59cbbd",
    marginBottom: 30,
  },
  text: {
    color: "#fff",
  },
});
