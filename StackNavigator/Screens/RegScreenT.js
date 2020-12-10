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

export default class RegformT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      username: "",
      password: "",
      bio: "",
      email: "",
      country: "",
      state: "",
      city: "",
      vacationCountry: "",
      vacationState: "",
      vacationCity: "",
      startDate: "",
      endDate: "",
      status: "T",
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.regform}>
            <Text style={styles.header}>Traveler Registration</Text>

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
              placeholder="Bio"
              placeholderTextColor="#fff"
              multiline={true}
              onChangeText={(data) => this.setState({ bio: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Email"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ email: data })}
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

            <TextInput
              style={styles.textinput}
              placeholder="Vacation Country"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ vacationCountry: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Vacation State"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ vacationState: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Vacation City"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ vacationCity: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Start Date"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ startDate: data })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="End Date"
              placeholderTextColor="#fff"
              onChangeText={(data) => this.setState({ endDate: data })}
            />

            {/* Change navigation to homescreen after user registers */}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate("Home")}
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
