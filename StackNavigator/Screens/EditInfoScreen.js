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
import axios from "axios";

export default class EditInfoScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   textInput_Name: "",
    //   textInput_username: "",
    //   textInput_Bio: "",
    //   textInput_Status: "",
    // };
  }

  state = {
    textInput_Name: "",
    textInput_username: "",
    textInput_Bio: "",
    textInput_Status: "",
  }

  editProfile = () => {
    const { username } = this.props.route.params;

    console.log(this.state.textInput_Bio);

    axios.put(`http://localhost:3000/edit_profile/${username}/${this.state.textInput_Bio}`)
    .then(res => {
      console.log(res);
    })

    this.props.navigation.goBack()
  }

  render() {
    const { item, username } = this.props.route.params;
    // const { fullname } = { ...item.name.toString(), ...item.surname.toString()};
    const fullname = item.name.toString() + " " + item.surname.toString();
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
                defaultValue={fullname}
                onChangeText={(data) => this.setState({ textInput_Name: data })}
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="username"
                placeholderTextColor="black"
                defaultValue={item.username}
                onChangeText={(data) =>
                  this.setState({ textInput_username: data })
                }
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Bio"
                placeholderTextColor="black"
                defaultValue={item.bio}
                onChangeText={(data) => this.setState({ textInput_Bio: data })}
              />
            </View>
            {/* <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Status"
                placeholderTextColor="black"
                defaultValue={item.status}
                onChangeText={(data) =>
                  this.setState({ textInput_Status: data })
                }
              />
            </View> */}
            <TouchableOpacity
              style={styles.btn}
              onPress={this.editProfile}
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
