//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import firebase from 'firebase';

import colors from '../../colors';

// create a component

class Home extends Component {
  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        alert('Logged Out');
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Code Here</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.signOutUser()}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: colors.buttonColor,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

//make this component available to the app
export default Home;
