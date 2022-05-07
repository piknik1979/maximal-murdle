import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import auth from '../../firebase';
import { Button } from 'react-native-paper';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Main Menu')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
    // </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
