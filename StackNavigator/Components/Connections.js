import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import axios from 'axios';

export default class Connections extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [],
    r_data: [],
    status: 'T'
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/get_status/${this.props.username}`)
    .then(res => {
      this.setState({status: res.data[0].status});
    })
    .catch(err => {
      console.error(err);
    })

    this.fetchToConnect();
  }

  fetchToConnect = () => {
    axios.get(`http://localhost:3000/to_connectT/${this.props.username}`)
    .then(res => {
      this.setState({data: res.data});
    })
    .catch(err => {
      console.error(err);
    })

    // axios.get(`http://localhost:3000/to_connectR/${this.props.username}`)
    // .then(res => {
    //   this.setState({r_data: res.data});
    // })
    // .catch(err => {
    //   console.error(err);
    // })
  }

  render() {
    const username = this.props.username;
    // let rendered_data;
    // if (this.state.status == 'R') {
    //   rendered_data = <FlatList
    //   style={styles.list}
    //   data={this.state.r_data}
    //   keyExtractor = {(item, index) => index.toString()}
    //   renderItem = {({ item }) => 
    //     <View style={styles.item}>
    //       <TouchableOpacity
    //         onPress={() =>
    //           this.props.navigation.navigate("ViewUser", {
    //             item,
    //             username: username,
    //           })
    //         }
    //       >
    //         <Text style={styles.name}>{item.name} {item.surname}</Text>
    //         <Text style={styles.username}>{item.username}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   }
    // />
    // }
    // else if (this.state.status == 'T') {
    //   rendered_data = <FlatList
    //   style={styles.list}
    //   data={this.state.data}
    //   keyExtractor = {(item, index) => index.toString()}
    //   renderItem = {({ item }) => 
    //     <View style={styles.item}>
    //       <TouchableOpacity
    //         onPress={() =>
    //           this.props.navigation.navigate("ViewUser", {
    //             item,
    //             username: username,
    //           })
    //         }
    //       >
    //         <Text style={styles.name}>{item.name} {item.surname}</Text>
    //         <Text style={styles.username}>{item.username}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   }
    // />
    // }
    return (
      <View style={styles.container}>
        <View>
          {/* {rendered_data} */}
          <FlatList
            style={styles.list}
            data={this.state.data}
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {({ item }) => 
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ViewUser", {
                      item,
                      username: username,
                    })
                  }
                >
                  <Text style={styles.name}>{item.name} {item.surname}</Text>
                  <Text style={styles.username}>{item.username}</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.props.navigation.navigate("ConnectionsList", {
              username: username,
            })
          }
        >
          <Text style={styles.text}>View Connections</Text>
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
  },
  text: {
    color: "#fff",
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
