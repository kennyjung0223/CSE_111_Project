import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    (this.arr = [
      {
        name: "Joseph Earl Thomas",
        userName: "JR21",
        bio:
          "From LA, California, I enjoy the going to the beach and hanging out with my friends",
        status: "T",
      },
    ]),
      (this.state = {
        arrHolder: [],
      });
  }

  componentDidMount() {
    // Copies this.arr into arrHolder
    this.setState({ arrHolder: [...this.arr] });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.arrHolder}
          extraData={this.state.arrHolder}
          keyExtractor={(item) => item.userName}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.img}
                source={require("../assets/favicon.png")}
              />
              <Text style={styles.info}>
                Name: <Text style={styles.userInfo}>{item.name}</Text>
              </Text>
              <Text style={styles.info}>
                Username: <Text style={styles.userInfo}>{item.userName}</Text>
              </Text>
              <Text style={styles.info}>
                Bio: <Text style={styles.userInfo}>{item.bio}</Text>
              </Text>
              <Text style={styles.info}>
                Status: <Text style={styles.userInfo}>{item.status}</Text>
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("EditInfo")}
        >
          <Text style={styles.text}>Edit Info</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  userInfo: {
    fontWeight: "normal",
    fontSize: 20,
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    width: 200,
    height: 75,
    backgroundColor: "#59cbbd",
    marginBottom: 60,
    marginTop: 20,
  },
  text: {
    color: "#fff",
  },
});
