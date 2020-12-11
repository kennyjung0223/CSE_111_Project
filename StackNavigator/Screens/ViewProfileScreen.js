import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

export default class ViewProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, userName } = this.props.route.params;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>{item.userName}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textInput}>
              <Text style={styles.btnText}>Name: </Text>
              {item.name}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textInput}>
              <Text style={styles.btnText}>Bio: </Text>
              {item.bio}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textInput}>
              <Text style={styles.btnText}>Status: </Text>
              {item.status}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    width: 300,
  },
  text: {},
  textContainer: {
    paddingVertical: 30,
  },
  btn: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
