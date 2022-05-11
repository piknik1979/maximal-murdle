import { View, Text, Pressable, Dimensions } from 'react-native';
import { keys, ENTER, DELETE, colors } from '../../../constants';
import { keyboardStyles, keyWidth } from '../styles/keyboardStyles';
import { useEffect } from 'react';

const Keyboard = ({
  handleKeyPress,
  setLives,
  setCurrentRow,
  currentRow,
  setGameState,
  letters,
  greenKeys = [],
  yellowKeys = [],
  greyKeys = [],
  wrongLetters,
}) => {
  const isLongButton = (key) => {
    return key === ENTER || key === DELETE;
  };

  const getKeyBGColor = (key) => {
    if (greenKeys.includes(key)) {
      return colors.primary;
    }
    if (yellowKeys.includes(key)) {
      return colors.secondary;
    }
    if (greyKeys.includes(key)) {
      return colors.darkgrey;
    }
    return colors.grey;
  };

  const lostLives = wrongLetters.length;

  useEffect(() => {
    if (letters.length * 2 - lostLives > 0) {
      setLives(letters.length * 2 - lostLives);
    } else {
      setLives(0);
      setGameState('allLivesLost');
      setCurrentRow(currentRow - 1);
    }
  }, [lostLives]);

  return (
    <View style={keyboardStyles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={keyboardStyles.row} key={`row-${i}`}>
          {keyRow.map((key) => (
            <Pressable
              onPress={() => handleKeyPress(key)}
              key={key}
              style={[
                keyboardStyles.key,
                isLongButton(key) ? { width: keyWidth * 1.4 } : {},
                { backgroundColor: getKeyBGColor(key) },
              ]}
            >
              <Text style={keyboardStyles.keyText}>{key.toUpperCase()}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Keyboard;
