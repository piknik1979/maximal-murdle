import { Text, StyleSheet, View } from 'react-native';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Lives = ({ lives, letters }) => {
  const heart = '❤️';
  const brokenHeart = '💔';
  const livesLost = letters.length * 2 - lives;
  const hearts = heart.repeat(lives);
  const brokenHearts = brokenHeart.repeat(livesLost);
  return (
    <View style={styles.lives}>
      <Text style={styles.icon}>
        {hearts}
        {brokenHearts}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'red',
    marginLeft: 10,
    fontSize: 20
  },
  lives: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 0
  }
});
export default Lives;
