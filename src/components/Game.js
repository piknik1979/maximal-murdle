import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import Keyboard from "./Keyboard";
import { ENTER, DELETE, colors } from "../constants";
import { words } from "./Words";
import gameStyles from "../styles/gameStyles";
import Timer from "./Timer";

const MAX_GUESSES = 6;
const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
};

const Game = () => {
  const word = words[0];
  const letters = word.split("");
  const [rows, setRows] = useState(
    new Array(MAX_GUESSES).fill(new Array(letters.length).fill(""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [gameState, setGameState] = useState("playing");

  const resetGame = () => {
    setRows(new Array(MAX_GUESSES).fill(new Array(letters.length).fill("")));
    setCurrentColumn(0);
    setCurrentRow(0);
    setGameState("playing");
  };

  useEffect(() => {
    if (gameState === "timeout") {
      console.log("inside the Game useEffect if statement")
      checkGameState();
    }
    if (currentRow > 0) {
      checkGameState();
    }
  }, [currentRow, gameState]);
  
  const checkGameState = () => {
    if (gameState === "timeout") {
      console.log("inside the Game checkGameState if statement")
      Alert.alert("You died! Shoulda thunk faster!")
      setGameState("lost")
    }
    else if (checkIfWon() && gameState !== "won") {
      Alert.alert("You live!!! For now...");
      setGameState("won");
    } else if (checkIfLost() && gameState !== "lost") {
      Alert.alert("Hah hah! You died!");
      setGameState("lost");
    }
  };

  const checkIfWon = () => {
    const row = rows[currentRow - 1];

    return row.every((letter, i) => letter === letters[i]);
  };

  const checkIfLost = () => {
    return !checkIfWon() && currentRow === rows.length;
  };

  const handleKeyPress = (key) => {
    if (gameState !== "playing") {
      return;
    }

    const updatedRows = copyArray(rows);

    if (key === ENTER) {
      if (currentColumn === rows[0].length) {
        setCurrentRow(currentRow + 1);
        setCurrentColumn(0);
      }

      return;
    }
    if (key === DELETE) {
      const prevColumn = currentColumn - 1;
      if (prevColumn >= 0) {
        updatedRows[currentRow][prevColumn] = "";
        setRows(updatedRows);
        setCurrentColumn(prevColumn);
      }
      return;
    }
    if (currentColumn < rows[0].length) {
      updatedRows[currentRow][currentColumn] = key;
      setRows(updatedRows);
      setCurrentColumn(currentColumn + 1);
    }
  };

  const isCellActive = (row, col) => {
    return row === currentRow && col === currentColumn;
  };

  const getCellBGColor = (row, col) => {
    const letter = rows[row][col];

    if (row >= currentRow) {
      return colors.black;
    }
    if (letter === letters[col]) {
      return colors.primary;
    }
    if (letters.includes(letter)) {
      return colors.secondary;
    }
    return colors.darkgrey;
  };

  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getCellBGColor(i, j) === color)
    );
  };

  const greenKeys = getAllLettersWithColor(colors.primary);
  const yellowKeys = getAllLettersWithColor(colors.secondary);
  const greyKeys = getAllLettersWithColor(colors.darkgrey);

  return (
    <SafeAreaView style={gameStyles.container}>
      <StatusBar style="light" />

      <Text style={gameStyles.title}>Maximal(Murdle)</Text>

      <ScrollView style={gameStyles.map}>
        {rows.map((row, i) => (
          <View key={`row-${i}`} style={gameStyles.row}>
            {row.map((letter, j) => (
              <View
                key={`cell-${i}-${j}`}
                style={[
                  gameStyles.cell,
                  {
                    borderColor: isCellActive(i, j)
                      ? colors.grey
                      : colors.darkgrey,
                    backgroundColor: getCellBGColor(i, j),
                  },
                ]}
              >
                <Text style={gameStyles.cellText}>{letter.toUpperCase()}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

        <Timer setGameState={setGameState} />
 

      <Pressable onPress={resetGame} style={gameStyles.resetButton}>
        <Text style={gameStyles.resetText}>RESTART</Text>
      </Pressable>

      <Keyboard
        handleKeyPress={handleKeyPress}
        greenKeys={greenKeys}
        yellowKeys={yellowKeys}
        greyKeys={greyKeys}
      />
    </SafeAreaView>
  );
};

export default Game;
