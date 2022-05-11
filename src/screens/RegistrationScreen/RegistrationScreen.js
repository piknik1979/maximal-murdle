import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth, db} from '../../../firebase';
import {collection, doc, setDoc} from 'firebase/firestore';
import styles from './styles';

const RegistrationScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log('Registered with:', user.email, user.uid);

      const data = {
        id: user.uid,
        fullName,
        email,
        created_at: Date.now(),
        scores: {
          total: 0,
          games: {},
        },
      };

      const userRef = collection(db, 'users');

      await setDoc(doc(userRef, user.uid), data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1, width: '100%'}}>
        <Image
          style={styles.logo}
          source={require('../../../assets/skull.png')}
        />
        <TextInput
          style={styles.input}
          placeholder='Full Name'
          placeholderTextColor='#aaaaaa'
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor='#aaaaaa'
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='#aaaaaa'
          secureTextEntry
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='#aaaaaa'
          secureTextEntry
          placeholder='Confirm Password'
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCreateAccount()}
        >
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegistrationScreen;
