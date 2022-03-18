import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  // const [text, onChangeText] = useState("Useless Text");
  // const [number, onChangeNumber] = useState(null);
  const [enteredGoal, setEnteredGoal] = useState(null);
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setEnteredGoal(null);
    setCourseGoal([]);
    setIsAddModal(false);
    setUserNumber(null);
    setGuessRounds(0);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoal((courseGoal) => [
      { id: Math.random().toString(), value: enteredGoal },
      ...courseGoal,
    ]);

    console.log(enteredGoal);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoal((courseGoal) => {
      return courseGoal.filter((goal) => goal.id !== goalId);
    });
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess the Number" />
      {content}

      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Button onPress={() => setIsAddModal(true)} title="Add New Goal" /> */}
      {/* <GoalInput
        isAddModal={isAddModal}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      /> */}

      {/* <View
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View> */}
      {/* <Button title="ADD" /> */}
      <StatusBar style="auto" />
      {/* <script src="http://localhost:8097"></script> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 2,
  },

  container: {
    padding: 50,
    marginTop: 15,
    // flexDirection: "row",
    // width: "100%",
    // // width: "80%",
    // flex: 1,
    // // height: 300,
    // // justifyContent: "center",
    // alignItems: "center",
  },
});
