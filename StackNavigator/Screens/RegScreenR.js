import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from 'axios';

export default class RegformR extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "",
    //   age: "",
    //   username: "",
    //   password: "",
    //   country: "",
    //   state: "",
    //   city: "",
    //   status: "R",
    // };
  }

  state = {
    name: "",
    age: "",
    username: "",
    password: "",
    country: "",
    state: "",
    city: "",
    status: "T",
  }

  handleEvent = event => {
    const local_resident = {
      name: this.state.name,
      age: this.state.age,
      username: this.state.username,
      password: this.state.password,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
    }

    axios.post(`http://localhost:3000/local_resident/${local_resident.name}/${local_resident.age}/${local_resident.username}/${local_resident.password}/${local_resident.country}/${local_resident.state}/${local_resident.city}`, local_resident)
    .then(res => {
      console.log(res);
    })

    this.props.navigation.navigate("Home", {username: this.state.username, })
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.regform}>
            <Text style={styles.header}>Resident Registration</Text>

            <TextInput
              style={styles.textinput}
              placeholder="Name"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ name: data })}
            />

            <TextInput
              style={styles.textinput}
              keyboardType="number-pad"
              placeholder="Age"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ age: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Username"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ username: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(data) => this.setState({ password: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Country"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ country: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="State"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ state: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="City"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ city: data })}
            />

            {/* Change navigation to homescreen after user registers */}
            <TouchableOpacity
              style={styles.btn}
              onPress={this.handleEvent}
            >
              <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    backgroundColor: "#36485f",
    justifyContent: "center",
    paddingBottom: 140,
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});
