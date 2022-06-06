import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export const UsersList = ({ navigation }) => {
  const [user, setUser] = useState([
    { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
    { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
    { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
    { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
    { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 8, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
    { id: 9, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
    { id: 10, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
    { id: 11, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
    { id: 12, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
  ]);

  const rightSwipeActions = () => {
    return (
      <TouchableOpacity onPress={() => swipeFromRightOpen()}>
        <View
          style={{
            marginTop: 5,
            backgroundColor: "#ff8303",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: "#1b1a17",
              paddingHorizontal: 10,
              fontWeight: "600",
              paddingHorizontal: 30,
              paddingVertical: 20,
            }}
          >
            Delete
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const swipeFromRightOpen = () => {
    alert("Swipe from right");
  };

  const ListItem = (item) => {
    return (
      <GestureHandlerRootView>
        <Swipeable
          // renderLeftActions={leftSwipeActions}
          renderRightActions={rightSwipeActions}
          // onSwipeableRightOpen={swipeFromRightOpen}
          // onSwipeableLeftOpen={swipeFromLeftOpen}
        >
          <View style={styles.container}>
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
                  <Text style={styles.description}>Lorem ipsum dolor sit</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  const Separator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        enableEmptySections={true}
        data={user}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => <ListItem {...item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginRight: 10,
  },
  box: {
    padding: 15,
    marginBottom: 0,
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
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "cyan",
    opacity: 0.1,
  },
});
