import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Keyboard from './src/components/Keyboard';
import { ENTER, DELETE } from './src/constants';
const MAX_GUESSES = 6;

const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
};

const words = ['world'];

export default function App() {
  const word = words[0];
  const letters = word.split('');
  const [rows, setRows] = useState(
    new Array(MAX_GUESSES).fill(new Array(letters.length).fill(''))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCollumn, setCurrentColumn] = useState(0);

  const handleKeyPress = (key) => {
    const updatedRows = copyArray(rows);
    if (key === ENTER) {
      if (currentCollumn === rows[0].length) {
        setCurrentRow(currentRow + 1);
        setCurrentColumn(0);
      }

      return;
    }
    if (key === DELETE) {
      const prevCol = currentCollumn - 1;
      if (prevCol >= 0) {
        updatedRows[currentRow][prevCol] = '';
        setRows(updatedRows);
        setCurrentColumn(prevCol);
      }
      return;
    }
    if (currentCollumn < rows[0].length) {
      updatedRows[currentRow][currentCollumn] = key;
      setRows(updatedRows);
      setCurrentColumn(currentCollumn + 1);
    }
  };

  const isCellActive = (row, col) => {
    console.log(row === currentRow && col === currentCollumn, '<<<<<');
    return row === currentRow && col === currentCollumn;
  };

  const getCellBGColor = (row, col) => {
    const letter = rows[row][col];

    if (row >= currentRow) {
      return '#121214';
    }
    if (letter === letters[col]) {
      return '#538D4E';
    }
    if (letters.includes(letter)) {
      return '#B59F3B';
    }
    return '#3A3A3D';
  };

  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getCellBGColor(i, j) === color)
    );
  };

  const greenKeys = getAllLettersWithColor('#538D4E');
  const yellowKeys = getAllLettersWithColor('#B59F3B');
  const greyKeys = getAllLettersWithColor('#3A3A3D');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>MURDLE WORLD!</Text>

      <ScrollView style={styles.map}>
        {rows.map((row, i) => (
          <View key={`row-${i}`} style={styles.row}>
            {row.map((letter, j) => (
              <View
                key={`cell-${i}-${j}`}
                style={[
                  styles.cell,
                  {
                    borderColor: isCellActive(i, j) ? '#818384' : '#3A3A3D',
                    backgroundColor: getCellBGColor(i, j)
                  }
                ]}
              >
                <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <Keyboard
        handleKeyPress={handleKeyPress}
        greenKeys={greenKeys}
        yellowKeys={yellowKeys}
        greyKeys={greyKeys}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  title: {
    color: 'grey',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 7
  },

  map: {
    alignSelf: 'stretch',
    marginVertical: 20
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cell: {
    borderWidth: 3,
    borderColor: 'grey',
    flex: 1,
    maxWidth: 70,
    aspectRatio: 1,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 28
  }
});
