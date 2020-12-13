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
import axios from 'axios';

export default class ConnectionsScreen extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchConnections();
  }

  fetchConnections = () => {
    const username = this.props.route.params.username;

    console.log(username);

    axios.get(`http://localhost:3000/connections/${username}`)
    .then(res => {
      this.setState({data: res.data});
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    const { username } = this.props.route.params;
    return (
      <View style={styles.container}>
          <FlatList
            style = {styles.list}
            data = {this.state.data}
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {({ item }) => 
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ViewProfile", { item, username: username})
                  }
                >
                  <Text style={styles.name}>{item.name} {item.surname}</Text>
                  <Text style={styles.username}>{item.username}</Text>
                </TouchableOpacity>
              </View>
            }
          />
      </View>
    )
  }
}

// export default class ConnectionsScreen extends Component {
//   constructor(props) {
//     super(props);
//     (this.arr = [
//       {
//         Name: "Andy Bui",
//         Username: "abui27",
//       },
//       {
//         Name: "J.R. Smith",
//         Username: "JR21",
//       },
//       {
//         Name: "Kenny Jung",
//         Username: "GamjaMan",
//       },
//       {
//         Name: "Lebron James",
//         Username: "KingJames",
//       },
//     ]),
//       (this.state = {
//         arrHolder: [],
//       });
//   }

//   componentDidMount() {
//     // Copies this.arr into arrHolder
//     this.setState({ arrHolder: [...this.arr] });
//   }

//   render() {
//     return (
//       <View>
//         <FlatList
//           style={styles.list}
//           data={this.state.arrHolder}
//           extraData={this.state.arrHolder}
//           keyExtractor={(item) => item.Username}
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <TouchableOpacity>
//                 <Text style={styles.name}>{item.Name}</Text>
//                 <Text style={styles.username}>{item.Username}</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       </View>
//     );
//   }
// }

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
