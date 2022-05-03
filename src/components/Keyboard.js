import { View, Text, Pressable, Dimensions } from "react-native";
import { keys, ENTER, DELETE } from "../constants";
import { keyboardStyles,keyWidth } from "../styles/keyboardStyles";

const Keyboard = ({
  handleKeyPress,
  greenKeys = [],
  yellowKeys = [],
  greyKeys = [],
}) => {
  const isLongButton = (key) => {
    return key === ENTER || key === DELETE;
  };

  const getKeyBGColor = (key) => {
    if (greenKeys.includes(key)) {
      return "#538D4E";
    }
    if (yellowKeys.includes(key)) {
      return "#B59F3B";
    }
    if (greyKeys.includes(key)) {
      return "#3A3A3D";
    }
    return "#818384";
  };

  return (
    <View style={keyboardStyles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={keyboardStyles.row} key={`row-${i}`}>
          {keyRow.map((key) => (
            <Pressable
              onPress={() => handleKeyPress(key)}
              // disabled={greyKeys.includes(key)}    disable letters if there are not there
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
