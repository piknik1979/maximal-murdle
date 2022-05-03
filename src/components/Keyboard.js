import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { keys, ENTER, DELETE } from '../constants';

const Keyboard = ({
  handleKeyPress,
  greenKeys = [],
  yellowKeys = [],
  greyKeys = []
}) => {
  const isLongButton = (key) => {
    return key === ENTER || key === DELETE;
  };

  const getKeyBGColor = (key) => {
    if (greenKeys.includes(key)) {
      return '#538D4E';
    }
    if (yellowKeys.includes(key)) {
      return '#B59F3B';
    }
    if (greyKeys.includes(key)) {
      return '#3A3A3D';
    }
    return '#818384';
  };

  return (
    <View style={styles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map((key) => (
            <Pressable
              onPress={() => handleKeyPress(key)}
              key={key}
              style={[
                styles.key,
                isLongButton(key) ? { width: keyWidth * 1.4 } : {},
                { backgroundColor: getKeyBGColor(key) }
              ]}
            >
              <Text style={styles.keyText}>{key.toUpperCase()}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;
const styles = StyleSheet.create({
  keyboard: {
    alignSelf: 'stretch',
    marginTop: 'auto'
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  key: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    borderRadius: 5,
    backgroundColor: '#818384',
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyText: {
    color: '#D7DADC',
    fontWeight: 'bold'
  }
});

export default Keyboard;
