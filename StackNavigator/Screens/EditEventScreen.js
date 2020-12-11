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
      textInput_date: "",
      textInput_users: "",
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
    const { item, userName } = this.props.route.params;
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
                placeholder="Date"
                placeholderTextColor="black"
                defaultValue={item.date}
                onChangeText={(data) => this.setState({ textInput_date: data })}
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Date"
                placeholderTextColor="black"
                defaultValue={item.users}
                onChangeText={(data) =>
                  this.setState({ textInput_users: data })
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

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>Delete Event</Text>
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
    margin: 10,
    borderRadius: 6,
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
