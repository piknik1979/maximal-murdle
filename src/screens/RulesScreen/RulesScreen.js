import { Text, ScrollView, View } from 'react-native';
import styles from './styles';

const RulesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <Text style={styles.headerText}>
          Maximal(<Text style={styles.murderText}>Murdle</Text>) Rules
          {'\n\n'}
          <Text style={styles.paragraphText}>
            Welcome to Maximal(Murdle), the Wordle Clone that everyone's just{' '}
            <Text style={styles.murderText}>dying</Text> to play!
            {'\n\n'}If you're not familiar with Wordle's rules, they're fairly
            easy to get to grips with. You have 6 chances to guess a 5-letter
            word. Type in and enter a guess, and you'll be shown which (if any)
            letters are in the right place when they turn{' '}
            <Text style={styles.primaryText}>green</Text>. Letters that turn{' '}
            <Text style={styles.secondaryText}>yellow</Text> are in the word,
            but in the wrong place. After your 6th guess, if you still haven't
            guessed the right word, you lose the game.
            {'\n\n'}But wait! This isn't{' '}
            <Text style={styles.murderText}>only</Text> Wordle, here!
            {'\n\n'}Maximal(Murdle) offers 2 other ways in which you can meet
            your doom! If the clock runs out, I'm afraid it's curtains. Equally,
            just as in hangman, guess too many wrong letters and you'll lose all
            your lives.
            {'\n\n'}Too difficult? There's only one way to find out! Challenge
            your friends, rise up the leaderboard, and show the world you're
            afraid of nothing! Nothing a little{' '}
            <Text style={styles.murderText}>Murdle</Text> can't cure...
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default RulesScreen;
