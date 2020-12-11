import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    (this.arr = [
      {
        eventLocation: "Mount Fuji",
        date: "10/28/2021",
        users: "Lebron James, J.R. Smith",
      },
      {
        eventLocation: "Imperial Tokyo",
        date: "11/3/2021",
        users: "Lebron James, J.R. Smith",
      },
      {
        eventLocation: "Historic Kyoto",
        date: "11/4/2021",
        users: "Lebron James, J.R. Smith",
      },
      {
        eventLocation: "Osaka Castle",
        date: "11/7/2021",
        users: "Lebron James, J.R. Smith",
      },
    ]),
      (this.state = {
        arrHolder: [],
        // textInput_Destination: "",
        // textInput_Dates: "",
      });
  }

  componentDidMount() {
    // Copies this.arr into arrHolder
    this.setState({ arrHolder: [...this.arr] });
  }

  // returnData(eventLocation, country) {
  //   this.setState({ arr: { eventLocation: eventLocation, country: country } });
  // }

  // onEdit = (eventLocation, country) => {
  //   this.setState({ arr: { eventLocation: eventLocation, country: country } });
  // };

  render() {
    const userName = this.props.username;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.arrHolder}
          extraData={this.state.arrHolder}
          keyExtractor={(item) => item.eventLocation}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("EditEvent", {
                    item,
                    userName: userName,
                  })
                }
              >
                <Text style={styles.eventLocation}>{item.eventLocation}</Text>
                <Text style={styles.date}>{item.users}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.props.navigation.navigate("AddEvent", { userName: userName })
          }
        >
          <Text style={styles.text}>Add Event</Text>
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
  eventLocation: {
    fontSize: 24,
    paddingVertical: 5,
  },
  date: {
    color: "gray",
    padding: 2,
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
