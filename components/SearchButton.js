import React from "react";
import { TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * @author
 * @function SearchButton
 **/

export const SearchButton = ({handleClick}) => {
  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={handleClick}
    >
      <View
        style={{
          backgroundColor: "#FEFDFF",
          borderRadius: 50,
          padding: 3,
        }}
      >
        <MaterialCommunityIcons name="magnify" size={25} />
      </View>
    </TouchableOpacity>
  );
};
