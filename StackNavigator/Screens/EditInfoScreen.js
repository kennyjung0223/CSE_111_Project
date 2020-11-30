import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default class EditInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput_Name: "",
      textInput_Username: "",
      textInput_Bio: "",
      textInput_Status: "",
    };
  }

  render() {
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.header}>Edit Info</Text>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Name"
                placeholderTextColor="black"
                onChangeText={(data) => this.setState({ textInput_Name: data })}
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="black"
                onChangeText={(data) =>
                  this.setState({ textInput_Username: data })
                }
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Bio"
                placeholderTextColor="black"
                onChangeText={(data) => this.setState({ textInput_Bio: data })}
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Status"
                placeholderTextColor="black"
                onChangeText={(data) =>
                  this.setState({ textInput_Status: data })
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
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
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
