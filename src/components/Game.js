import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import Keyboard from "./Keyboard";
import { ENTER, DELETE } from "../constants";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { words } from "./Words";

const Game = () => {
  const MAX_GUESSES = 6;

  const copyArray = (arr) => {
    return [...arr.map((rows) => [...rows])];
  };
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
    if (currentRow > 0) {
      checkGameState();
    }
  }, [currentRow]);

  const checkGameState = () => {
    if (checkIfWon() && gameState !== "won") {
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
    const updatedRows = copyArray(rows);
    if (key === ENTER) {
      if (currentColumn === rows[0].length) {
        setCurrentRow(currentRow + 1);
        setCurrentColumn(0);
      }

      return;
    }
    if (key === DELETE) {
      const prevCol = currentColumn - 1;
      if (prevCol >= 0) {
        updatedRows[currentRow][prevCol] = "";
        setRows(updatedRows);
        setCurrentColumn(prevCol);
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
      return "#121214";
    }
    if (letter === letters[col]) {
      return "#538D4E";
    }
    if (letters.includes(letter)) {
      return "#B59F3B";
    }
    return "#3A3A3D";
  };

  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getCellBGColor(i, j) === color)
    );
  };

  const greenKeys = getAllLettersWithColor("#538D4E");
  const yellowKeys = getAllLettersWithColor("#B59F3B");
  const greyKeys = getAllLettersWithColor("#3A3A3D");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Maximal(Murdle)</Text>

      <ScrollView style={styles.map}>
        {rows.map((row, i) => (
          <View key={`row-${i}`} style={styles.row}>
            {row.map((letter, j) => (
              <View
                key={`cell-${i}-${j}`}
                style={[
                  styles.cell,
                  {
                    borderColor: isCellActive(i, j) ? "#818384" : "#3A3A3D",
                    backgroundColor: getCellBGColor(i, j),
                  },
                ]}
              >
                <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <Pressable
        onPress={resetGame}
        style={{
          height: 40,
          width: 80,
          backgroundColor: "#3A3A3D",
          justifyContent: "center",
          borderRadius: 5,
          marginBottom: 5,
        }}
      >
        <Text style={{ color: "#D7DADC", textAlign: "center" }}>RESTART</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    paddingTop: getStatusBarHeight(),
    color: "grey",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },

  map: {
    alignSelf: "stretch",
    marginVertical: 20,
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    borderWidth: 3,
    borderColor: "grey",
    flex: 1,
    maxWidth: 70,
    aspectRatio: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 28,
  },
});

export default Game;
