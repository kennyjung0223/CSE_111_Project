import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    (this.arr = [
      {
        name: "Mount Fuji",
        location: "Fuji-Hakone-Izu National Park",
        description: "It's a big mountain!",
      },
      {
        name: "Imperial Tokyo",
        location: "Chiyoda City, Tokyo, Japan",
        description: "It's a old school Japan!",
      },
      {
        name: "Historic Kyoto",
        location: "Kyoto, Japan",
        description: "It's also old school Japan",
      },
      {
        name: "Osaka Castle",
        location: "Osaka, Japan",
        description: "It's a castle!",
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
    const userName = this.props.username;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.arrHolder}
          extraData={this.state.arrHolder}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ViewRecommendation", {
                  item,
                  userName: userName,
                })
              }
            >
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.props.navigation.navigate("AddRecommendation", {
              userName: userName,
            })
          }
        >
          <Text style={styles.text}>Add a Recommendation!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
  },
  list: {
    paddingBottom: 30,
    paddingTop: 10,
  },
  name: {
    fontSize: 24,
    paddingVertical: 5,
  },
  location: {
    color: "gray",
  },
  item: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  text: {
    color: "#fff",
  },
});
