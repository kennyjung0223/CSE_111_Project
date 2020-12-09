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

export default class EditEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput_EventLocation: "",
      textInput_Country: "",
    };
  }

  // confirm() {
  //   this.props.navigation.state.params.returnData(
  //     textInput_EventLocation,
  //     textInput_Country
  //   );
  //   this.props.navigation.goBack();
  // }

  render() {
    const { item } = this.props.route.params;
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.header}>Edit Event</Text>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Event Location"
                placeholderTextColor="black"
                defaultValue={item.eventLocation}
                onChangeText={(data) =>
                  this.setState({ textInput_EventLocation: data })
                }
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Country"
                placeholderTextColor="black"
                defaultValue={item.country}
                onChangeText={(data) =>
                  this.setState({ textInput_Country: data })
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.props.navigation.goBack();
              }}
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