import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

const GoalItem = (props) => {
  // console.log(props);
  return (
    <TouchableOpacity
      // onPress={props.onDelete.bind(this, props.id)}
      activeOpacity={0.8}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
        <Text onPress={props.onDelete.bind(this, props.id)}>Delete</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
  },
});
