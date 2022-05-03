// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
 
const ChatScreen = () => {
 
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View> 
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
});

export default ChatScreen