import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const UsersList = ({ navigation }) => {
  const [user, setuser] = useState([
    { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
    { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
    { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
    { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
    { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 8, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
    { id: 9, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
    { id: 10, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
  ]);
  return (
    <FlatList
      enableEmptySections={true}
      data={user}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={({ item }) => {
        return (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
              <View style={styles.box}>
                <Icon
                  name="comment"
                  color="red"
                  style={styles.icon}
                  size={15}
                />
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.boxContent}>
                  <Text style={styles.title}>Title</Text>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, elit consectetur
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginRight: 10,
  },
  box: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  boxContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  description: {
    fontSize: 15,
    color: "#646464",
  },
  title: {
    fontSize: 18,
    color: "#151515",
  },
});
