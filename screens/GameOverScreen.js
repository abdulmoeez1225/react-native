import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game IS Over</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
