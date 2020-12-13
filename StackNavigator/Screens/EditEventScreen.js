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

export default class EditEventScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   textInput_EventLocation: "",
    //   textInput_date: "",
    //   textInput_users: "",
    // };
  }

  state = {
    textInput_EventLocation: "",
    textInput_date: "",
    textInput_users: "",
    textInput_event_id: ""
  }

  editEvent = event => {
    const { item, username } = this.props.route.params;

    const event_entry = {
      event_date: item.event_time,
      event_location: item.location,
      event_id: item.other_user_event_id
    }

    axios.put(`http://localhost:3000/edit_event/${event_entry.event_date}/${event_entry.event_location}/${event_entry.event_id}`, event_entry)
    .then(res => {
      console.log(res);
    })

    this.props.navigation.goBack()
  }

  deleteEvent = event => {
    const { item, username } = this.props.route.params;

    const event_entry = {
      event_id: item.other_user_event_id
    }

    axios.delete(`http://localhost:3000/delete_event/${event_entry.event_id}`, event_entry)
    .then(res => {
      console.log(res);
    })

    this.props.navigation.goBack()
  }

  render() {
    const { item, username } = this.props.route.params;
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
                defaultValue={item.location}
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
                defaultValue={item.event_time}
                onChangeText={(data) => this.setState({ textInput_date: data })}
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Who are you going with?"
                placeholderTextColor="black"
                defaultValue={item.username}
                onChangeText={(data) =>
                  this.setState({ textInput_users: data })
                }
              />
            </View>
            <View style={styles.textContainer2}>
              <TextInput
                style={styles.textInput}
                placeholder="Hello"
                placeholderTextColor="black"
                defaultValue={item.other_user_event_id.toString()}
                onChangeText={({data}) =>
                  this.setState({ textInput_event_id: data })
                }
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={this.editEvent}
            >
              <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.deleteEvent}
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
  textContainer2: {
    paddingVertical: 30,
    opacity: 0
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
