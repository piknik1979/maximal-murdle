import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { keys } from '../constants';

const Keyboard = () => {
  return (
    <View style={styles.keyboard}>
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map((key) => (
            <Pressable key={key} style={[styles.key]}>
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
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyText: {
    fontWeight: 'bold'
  }
});

export default Keyboard;
