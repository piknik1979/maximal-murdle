import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <Button mode="contained" onPress={() => navigation.navigate('Main Menu')}>
        Start Game
      </Button>
    </ScrollView>
  );
}

/* const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}); */

export default HomeScreen;
