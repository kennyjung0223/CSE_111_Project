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
import axios from 'axios';

export default class AddEventScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   textInput_EventLocation: "",
    //   textInput_Date: "",
    //   textInput_Users: "",
    // };
  }

  state = {
    textInput_EventLocation: "",
    textInput_Date: "",
    textInput_User: ""
  }

  handleEvent = event => {

    const username = this.props.route.params;

    const event_entry = {
      event_location: this.state.textInput_EventLocation,
      date: this.state.textInput_Date
    }

    console.log(event_entry);

    axios.post(`http://localhost:3000/add_event/${event_entry.event_location}/${event_entry.date}/${username.username}/${this.state.textInput_User}`, event_entry)
    .then(res => {
      console.log(res);
    })

    this.props.navigation.goBack()
  }

  render() {
    const { username } = this.props.route.params;
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.header}>Add an Event</Text>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Event Location"
                placeholderTextColor="black"
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
                onChangeText={(data) => this.setState({ textInput_Date: data })}
              />
            </View>
            <View style={styles.textContainer2}>
              <TextInput
                style={styles.textInput}
                placeholder="Who are you going with?"
                placeholderTextColor="black"
                onChangeText={(data) =>
                  this.setState({ textInput_User: data })
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={this.handleEvent}
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
    padding: 25,
    marginTop: 15,
    backgroundColor: "#59cbbd",
    borderRadius: 6,
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
