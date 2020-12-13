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
import axios from 'axios';

export default class ViewUserScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    textInput_EventLocation: "",
    textInput_Date: "",
    textInput_User: ""
  }

  connectUser = event => {

    const { item, username } = this.props.route.params;

    const handleConnectUser = {
      other_username: item.username
    }

    axios.post(`http://localhost:3000/connect_buddy/${username}/${handleConnectUser.other_username}`, handleConnectUser)
    .then(res => {
      console.log(res);
    })

    this.props.navigation.goBack()
  }

  render() {
    const { item, username } = this.props.route.params;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>{item.username}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textInput}>
              <Text style={styles.btnText}>Name: </Text>
              {item.name} {item.surname}
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
        <TouchableOpacity
          style={styles.btn}
          onPress={this.connectUser}
        >
          <Text style={styles.text}>Add {item.username}</Text>
        </TouchableOpacity>
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
  text: {
    color: "#fff",
  },
  textContainer: {
    paddingVertical: 30,
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    width: 200,
    height: 75,
    backgroundColor: "#59cbbd",
    marginBottom: 30,
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
