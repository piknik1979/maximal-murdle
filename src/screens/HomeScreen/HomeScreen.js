import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image
} from 'react-native';

import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { Button } from 'react-native-paper';
import { UserContext } from '../../context/User';

import styles from './styles';
import { Alert } from 'react-native-web';

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = React.useContext(UserContext);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigation.navigate('Login');
    } catch (err) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            Maximal(<Text style={{ color: '#bb0a1e' }}>Murdle</Text>) 🔪
            <Text style={{ fontSize: 10 }}>🩸</Text>
          </Text>
        </View>
        <Image
          style={styles.logo}
          source={require('../../../assets/skull.png')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main Menu')}
        >
          <Text style={styles.buttonTitle}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Leaderboard')}
        >
          <Text style={styles.buttonTitle}>Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Results')}
        >
          <Text style={styles.buttonTitle}>Results</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Rules')}
        >
          <Text style={styles.buttonTitle}>How To Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => handleSignOut()}
        >
          <Text style={styles.signOutButtonTitle}>Sign Out</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;
