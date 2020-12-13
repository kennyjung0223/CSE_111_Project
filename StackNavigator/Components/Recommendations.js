import React, {Component} from "react";
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

// const data = [
//   {
//     name: "Mount Fuji",
//     location: "Fuji-Hakone-Izu National Park",
//   },
//   {
//     name: "Imperial Tokyo",
//     location: "Chiyoda City, Tokyo, Japan",
//   },
//   {
//     name: "Historic Kyoto",
//     location: "Kyoto, Japan",
//   },
//   {
//     name: "Osaka Castle",
//     location: "Osaka, Japan",
//   },
// ];

// const Item = ({ name, location }) => (
//   <View style={styles.item}>
//     <Text style={styles.dest}>{name}</Text>
//     <Text style={styles.dates}>{location}</Text>
//   </View>
// );

// export default function Recommendations() {
//   const renderItem = ({ item }) => (
//     <Item name={item.name} location={item.location} />
//   );

//   return (
//     <View style={styles.container}>
//       <View>
//         <FlatList
//           style={styles.list}
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.name}
//         />
//       </View>
//     </View>
//   );
// }

export default class Recommendations extends Component {
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
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`http://localhost:3000/recommendations/${this.props.username}`)
    .then(res => {
      this.setState({data: res.data});
    })
    .catch(err => {
      console.error(err);
    })

    axios.get(`http://localhost:3000/recommended_places/${this.props.username}`)
    .then(res => {
      this.setState({r_data: res.data});
    })
    .catch(err => {
      console.error(err);
    })

  }

  render() {
    const username = this.props.username;
    let rendered_data;
    let button;
    if (this.state.status == 'R') {
      rendered_data =           <FlatList
                                  style = {styles.list}
                                  data = {this.state.r_data}
                                  keyExtractor = {(item, index) => index.toString()}
                                  renderItem = {({ item }) => 
                                  <TouchableOpacity
                                  onPress={() =>
                                    this.props.navigation.navigate("ViewRecommendation", {
                                      item,
                                      userName: userName,
                                    })
                                  }
                                >
                                    <View style={styles.item}>
                                      <Text style={styles.dest}>{item.name}</Text>
                                    </View>
                                    </TouchableOpacity>
                                  }
                                />
      button = <TouchableOpacity
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("AddRecommendation", {
                  username: username
                })}
              >
                <Text style={styles.text}>Add a Recommendation!</Text>
              </TouchableOpacity>
    }
    else if (this.state.status == 'T') {
      rendered_data =           <FlatList
                                  style = {styles.list}
                                  data = {this.state.data}
                                  keyExtractor = {(item, index) => index.toString()}
                                  renderItem = {({ item }) => 
                                  <TouchableOpacity
                                  onPress={() =>
                                    this.props.navigation.navigate("ViewRecommendation", {
                                      item,
                                      username: username,
                                    })
                                  }
                                >
                                    <View style={styles.item}>
                                      <Text style={styles.dest}>{item.name}</Text>
                                      <Text style={styles.dates}>{item.city}, {item.country}</Text>
                                    </View>
                                    </TouchableOpacity>
                                  }
                                />
    }
    return(
      <View style={styles.container}>
          {/* <FlatList
            style = {styles.list}
            data = {this.state.data}
            keyExtractor = {(item, index) => index.toString()}
            renderItem = {({ item }) => 
              <View style={styles.item}>
                <Text style={styles.dest}>{item.name}</Text>
                <Text style={styles.dates}>{item.city}, {item.country}</Text>
              </View>
            }
          /> */}
          {rendered_data}
          {button}
        {/* <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.props.navigation.navigate("AddRecommendation", {
              userName: userName,
            })
          }
        >
          <Text style={styles.text}>Add a Recommendation!</Text>
        </TouchableOpacity> */}
      </View>
    )
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
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  location: {
    color: "gray",
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
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
