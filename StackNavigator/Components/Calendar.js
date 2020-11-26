import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

const data = [
  {
    destination: "Japan",
    dates: "8/23/2021 - 9/1/2021",
  },
  {
    destination: "Texas",
    dates: "9/15/2021 - 9/17/2021",
  },
  {
    destination: "Spain",
    dates: "10/1/2021 - 10/10/2021",
  },
  {
    destination: "Switzerland",
    dates: "11/5/2021 - 11/10/2021",
  },
];

const Item = ({ destination, dates }) => (
  <View style={styles.item}>
    <Text style={styles.dest}>{destination}</Text>
    <Text style={styles.dates}>{dates}</Text>
  </View>
);

export default function Calendar({ navigation }) {
  const renderItem = ({ item }) => (
    <Item destination={item.destination} dates={item.dates} />
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.destination}
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("AddTrip")}
        >
          <Text style={styles.text}>Plan a trip!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
  },
  list: {
    paddingBottom: 30,
    paddingTop: 10,
  },
  dest: {
    fontSize: 24,
    paddingVertical: 5,
  },
  dates: {
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
