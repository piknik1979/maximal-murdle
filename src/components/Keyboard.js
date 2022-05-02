import { View, Text, Pressable, StyleSheet } from 'react-native';
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
    margin: 2,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center'
  },
  keyText: {
    fontWeight: 'bold'
  }
});

export default Keyboard;
