import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";

export default class Profile extends Component {
  state = {
    data: [
      {
        name: "Andy Bui",
        age: "21",
        bio: "Hello",
        status: "T",
      },
    ],
  };

  componentDidMount() {
    this.fetchProfileData();
  }

  fetchProfileData() {
    axios
      .get("http://192.168.1.29:3000/user/moneyman")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Image
                style={styles.img}
                source={require("../assets/favicon.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("EditInfo", { item })
                }
              >
                <Text style={styles.info}>
                  Name: <Text style={styles.userInfo}>{item.name}</Text>
                </Text>
                <Text style={styles.info}>
                  Username:{" "}
                  <Text style={styles.userInfo}>{this.props.username}</Text>
                </Text>
                <Text style={styles.info}>
                  Age: <Text style={styles.userInfo}>{item.age}</Text>
                </Text>
                <Text style={styles.info}>
                  Bio: <Text style={styles.userInfo}>{item.bio}</Text>
                </Text>
                <Text style={styles.info}>
                  Status: <Text style={styles.userInfo}>{item.status}</Text>
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.props.navigation.navigate("EditInfo", { item: this.state.arr })
          }
        >
          <Text style={styles.text}>Edit Info</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

// export default function Profile() {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Image style={styles.img} source={require("../assets/favicon.png")} />

//         <Text style={styles.info}>
//           Name: <Text style={styles.userinfo}>Joseph Earl Thomas</Text>
//         </Text>

//         <Text style={styles.info}>
//           Username: <Text style={styles.userinfo}>JR21</Text>
//         </Text>

//         <Text style={styles.info}>
//           Bio:{" "}
//           <Text style={styles.userinfo}>
//             From Los Angeles California, I enjoy going to the beach and hanging
//             out with my friends.
//           </Text>
//         </Text>

//         <Text style={styles.info}>
//           Status: <Text style={styles.userinfo}>Traveler</Text>
//         </Text>
//       </ScrollView>
//     </View>
//   );
// }

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
