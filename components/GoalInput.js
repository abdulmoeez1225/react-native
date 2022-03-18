import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import React from "react";

const GoalInput = (props) => {
  return (
    <Modal visible={props.isAddModal} animationType="slide">
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={props.goalInputHandler}
          placeholder="useless placeholder"
          // keyboardType="numeric"
        />
        <Button title="ADD" onPress={props.addGoalHandler} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
  },
});
