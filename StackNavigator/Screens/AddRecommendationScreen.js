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

export default class AddRecommendationScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   textInput_name: "",
    //   textInput_city: "",
    //   textInput_state: "",
    //   textInput_country: "",
    //   textInput_description: "",
    // };
  }

  state = {
    textInput_name: "",
    textInput_city: "",
    textInput_state: "",
    textInput_country: "",
    textInput_description: "",
    resident_id: 0
  }

  componentDidMount() {
    const username = this.props.route.params;
    
    axios.get(`http://localhost:3000/local_resident_id/${username.username}`)
    .then(res => {
      this.setState({resident_id: res.data[0].resident_id})
    })
    .catch(err => {
      console.error(err);
    })
  }

  handleEvent = event => {

    const recommendation = {
      location_name: this.state.textInput_name,
      city: this.state.textInput_city,
      state: this.state.textInput_state,
      country: this.state.textInput_country,
      description: this.state.textInput_description,
      resident_id: this.state.resident_id
    }

    axios.post(`http://localhost:3000/add_recommendation/${this.props.username}/${recommendation.resident_id}/${recommendation.location_name}/${recommendation.city}/${recommendation.state}/${recommendation.country}/${recommendation.description}`, recommendation)
    .then(res => {
      console.log(res);
    })

    this.props.navigation.goBack()
  }

  render() {
    const { username } = this.props.route.params;
    return (
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.header}>Make a Recommendation</Text>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Location"
                placeholderTextColor="black"
                onChangeText={(data) => this.setState({ textInput_name: data })}
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="City"
                placeholderTextColor="black"
                onChangeText={(data) => this.setState({ textInput_city: data })}
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="State"
                placeholderTextColor="black"
                onChangeText={(data) =>
                  this.setState({ textInput_state: data })
                }
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Country"
                placeholderTextColor="black"
                onChangeText={(data) =>
                  this.setState({ textInput_country: data })
                }
              />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Description"
                placeholderTextColor="black"
                multiline={true}
                onChangeText={(data) =>
                  this.setState({ textInput_description: data })
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
      </KeyboardAwareScrollView>
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
    backgroundColor: "#59cbbd",
    borderRadius: 6,
    marginTop: 90,
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
