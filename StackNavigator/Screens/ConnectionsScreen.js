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
  FlatList,
} from "react-native";

export default class ConnectionsScreen extends Component {
  constructor(props) {
    super(props);
    (this.arr = [
      {
        name: "Andy Bui",
        userName: "abui27",
        bio: "my bio",
        age: "21",
        status: "T",
      },
      {
        name: "J.R. Smith",
        userName: "JR21",
        bio: "my bio",
        age: "21",
        status: "T",
      },
      {
        name: "Kenny Jung",
        userName: "GamjaMan",
        bio: "my bio",
        age: "21",
        status: "T",
      },
      {
        name: "Lebron James",
        userName: "KingJames",
        bio: "my bio",
        age: "21",
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
    const { userName } = this.props.route.params;
    return (
      <View>
        <FlatList
          style={styles.list}
          data={this.state.arrHolder}
          extraData={this.state.arrHolder}
          keyExtractor={(item) => item.userName}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("ViewProfile", {
                    item,
                    userName: userName,
                  })
                }
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.username}>{item.userName}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 30,
    paddingTop: 10,
  },
  name: {
    fontSize: 24,
    paddingVertical: 5,
  },
  username: {
    color: "gray",
  },
  item: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
});
