import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.login}>
        <Text style={styles.header}>Sojourn</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#fff"
          secureTextEntry={false}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("RegisterT")}
        >
          <Text style={styles.btntext}>I'm a New Traveler...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("RegisterR")}
        >
          <Text style={styles.btntext}>I'm a New Resident...</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#36485f",
    justifyContent: "center",
    paddingBottom: 170,
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 58,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
    alignSelf: "center",
    fontFamily: "Savoye LET",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  textInput: {
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
