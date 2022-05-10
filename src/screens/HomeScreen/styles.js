import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {},

  logo: {
    resizeMode: 'stretch',
    width: 150,
    height: 150,
    alignSelf: 'center',
    margin: 30
  },

  button: {
    backgroundColor: '#D7DADC',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signOutButton: {
    backgroundColor: '#bb0a1e',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    color: '#bb0a1e',
    fontSize: 16,
    fontWeight: 'bold'
  },
  signOutButtonTitle: {
    color: '#D7DADC',
    fontSize: 16,
    fontWeight: 'bold'
  },
  headerText: {
    color: '#D7DADC',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 'auto',
    marginTop: 10,
    fontSize: 40
  },
  murderText: {
    color: '#bb0a1e'
  }
});
