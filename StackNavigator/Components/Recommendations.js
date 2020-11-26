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
    name: "Mount Fuji",
    location: "Fuji-Hakone-Izu National Park",
  },
  {
    name: "Imperial Tokyo",
    location: "Chiyoda City, Tokyo, Japan",
  },
  {
    name: "Historic Kyoto",
    location: "Kyoto, Japan",
  },
  {
    name: "Osaka Castle",
    location: "Osaka, Japan",
  },
];

const Item = ({ name, location }) => (
  <View style={styles.item}>
    <Text style={styles.dest}>{name}</Text>
    <Text style={styles.dates}>{location}</Text>
  </View>
);

export default function Recommendations() {
  const renderItem = ({ item }) => (
    <Item name={item.name} location={item.location} />
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
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
