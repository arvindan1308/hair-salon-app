//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

import firebase from 'firebase';

import { Header, Left } from 'native-base';

import { View } from 'react-native-animatable';

import Divider from 'react-native-divider';

// create a component

class Profile extends Component {
  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert('Logged Out');
      });
  };
  render() {
    return (
      <View style={styles.view1}>
        <Header style={{ backgroundColor: 'black' }} />
        <View>
          <Image source={require('../../images/HSLogo.jpg')}
            style={{ height: 180, width: 200, marginTop: 30, marginLeft: 120 }} />
          <Text style={{ marginLeft: 135, fontWeight: 'bold', fontSize: 22 }}> BARBER'S BLADE</Text>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('About1')}>
            <Text style={styles.button1Text}>About</Text>
          </TouchableOpacity>
          <Divider borderColor='black' color="black" orientation="center"/>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate('Help1')}>
            <Text style={styles.button2Text}>Help</Text>
          </TouchableOpacity>
          <Divider borderColor='black' color="black" orientation="center"/>
          <TouchableOpacity
            style={styles.button4}
            onPress={() => this.props.navigation.navigate('Product')}>
            <Text style={styles.button4Text}>Review</Text>
          </TouchableOpacity>
          <Divider borderColor='black' color="black" orientation="center"/>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => this.signOutUser()}>
            <Text style={styles.button3Text}>Logout</Text>
          </TouchableOpacity>
          <Divider borderColor='black' color="black" orientation="center"/>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  card1: {
    height: 490,
    width: 420,
    marginTop: 150,
    justifyContent: 'center',
  },
  view1: {
    flex: 2,
    backgroundColor: 'white',
  },
  button1: {
    marginTop: 115,
    alignItems: 'center',
    justifyContent: 'center',
    width: 420,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 25,
  },
  button1Text: {
    color: 'black',
    fontSize: 18,
    textAlign:'center',
    fontWeight: 'bold',
    // paddingRight:300
  },
  button2: {
    width: 420,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 25,
    fontSize: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2Text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button3: {
    width: 420,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 25,
    fontSize: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button3Text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    // paddingRight:300
  },
  button4: {
    width: 420,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 25,
    fontSize: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button4Text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    // paddingRight:300
  },
  button5: {
    width: 420,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 25,
    fontSize: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button5Text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    // paddingRight:300
  },
}
);

//make this component available to the app
export default Profile;
