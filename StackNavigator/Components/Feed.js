import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import axios from 'axios';

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.feedText}>Hello, {this.props.username}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("Recommendations")}
        >
          <Text style={styles.btntext}>View Recommendations</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
    borderRadius: 6,
  },
  btntext: {
    color: "#fff",
  },
  feedText: {
    fontFamily: "Savoye LET",
    fontSize: 34,
  },
});
