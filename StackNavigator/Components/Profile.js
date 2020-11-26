import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.img} source={require("../assets/favicon.png")} />

        <Text style={styles.info}>
          Name: <Text style={styles.userinfo}>Joseph Earl Thomas</Text>
        </Text>

        <Text style={styles.info}>
          Username: <Text style={styles.userinfo}>JR21</Text>
        </Text>

        <Text style={styles.info}>
          Bio:{" "}
          <Text style={styles.userinfo}>
            From Los Angeles California, I enjoy going to the beach and hanging
            out with my friends.
          </Text>
        </Text>

        <Text style={styles.info}>
          Status: <Text style={styles.userinfo}>Traveler</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    alignSelf: "center",
    marginTop: 20,
    width: 100,
    height: 100,
  },
  info: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  userinfo: {
    fontWeight: "normal",
  },
});
