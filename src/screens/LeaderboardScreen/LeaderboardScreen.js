import { Text, View, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }}>
        <Text style={styles.headerText}>
          <Text style={styles.murderText}>Leaderboard</Text>
        </Text>
        <Text style={styles.paragraphText}>Text</Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LeaderboardScreen;
