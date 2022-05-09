import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {auth} from '../../../firebase';
import {signOut} from 'firebase/auth';
import {UserContext} from '../../context/User';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const {user, setUser} = React.useContext(UserContext);
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
      <KeyboardAvoidingView style={{flex: 1, width: '100%'}}>
        {/* <View style={styles.headerView}>
          <Text style={styles.headerText}>Maximal Murdle</Text>
        </View> */}
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
        <TouchableOpacity style={styles.button} onPress={() => handleSignOut()}>
          <Text style={styles.buttonTitle}>Sign Out</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;
