import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchEvents();
  }

  // getOtherUserEventID() {
  //   this.props.navigation.navigate("EditEvent", {other_user_event_id})
  //   console.log(other_user_event_id)
  // }

  fetchEvents() {
    axios.get(`http://localhost:3000/events/${this.props.username}`)
    .then(res => {
      this.setState({data: res.data});
    })
    .catch(err => {
      console.error(error);
    })
  }

  render() {
    const username = this.props.username;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() =>
                  // this.props.navigation.navigate("EditEvent", {other_user_event_id, item})
                  this.props.navigation.navigate("EditEvent", {
                    item,
                    username: username,
                  })
                }
              >
                <Text style={styles.eventLocation}>{item.location}</Text>
                <Text style={styles.date}>{item.username}</Text>
                <Text style={styles.date}>{item.event_time}</Text>
                {/* <Text style={styles.date}>{item.other_user_event_id}</Text> */}
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.props.navigation.navigate("AddEvent", { username: username })
          }
        >
          <Text style={styles.text}>Add Event</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// export default class Calendar extends Component {
//   constructor(props) {
//     super(props);
//     (this.arr = [
//       {
//         eventLocation: "Mount Fuji",
//         country: "Japan",
//       },
//       {
//         eventLocation: "Imperial Tokyo",
//         country: "Japan",
//       },
//       {
//         eventLocation: "Historic Kyoto",
//         country: "Japan",
//       },
//       {
//         eventLocation: "Osaka Castle",
//         country: "Japan",
//       },
//     ]),
//       (this.state = {
//         arrHolder: [],
//         // textInput_Destination: "",
//         // textInput_Dates: "",
//       });
//   }

//   componentDidMount() {
//     // Copies this.arr into arrHolder
//     this.setState({ arrHolder: [...this.arr] });
//   }

//   // returnData(eventLocation, country) {
//   //   this.setState({ arr: { eventLocation: eventLocation, country: country } });
//   // }

//   // onEdit = (eventLocation, country) => {
//   //   this.setState({ arr: { eventLocation: eventLocation, country: country } });
//   // };

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={styles.list}
//           data={this.state.arrHolder}
//           extraData={this.state.arrHolder}
//           keyExtractor={(item) => item.eventLocation}
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <TouchableOpacity
//                 onPress={() =>
//                   this.props.navigation.navigate("EditEvent", {
//                     item,
//                   })
//                 }
//               >
//                 <Text style={styles.eventLocation}>{item.eventLocation}</Text>
//                 <Text style={styles.country}>{item.country}</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />

//         <TouchableOpacity
//           style={styles.btn}
//           onPress={() => this.props.navigation.navigate("AddEvent")}
//         >
//           <Text style={styles.text}>Add Event</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

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
