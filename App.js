import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';
//import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Firebase from './src/config/firebase';
import Logo from './src/components/Logo';
import SignUp from './src/pages/SignUp';
import Dashboard from './src/pages/Dashboard';

import colors from './colors';
class App extends React.Component {
  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Dashboard' : 'Login');
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
  }

  logInUser = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Dashboard'))
      .catch(error => Alert.alert('Login Failed', error.message));
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
          enabled
          style={styles.container}
        >
          <ScrollView>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Email'
              placeholderTextColor='gray'
              onChangeText={email => this.setState({ email })}
            />

            <TextInput
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Password'
              placeholderTextColor='gray'
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.logInUser(this.state.email, this.state.password)
              }
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signUpCont}>
              <Text style={styles.signUpText}>Don't have an account yet?</Text>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => this.props.navigation.navigate('SignUp')}
              >
                <Text style={styles.signUpText}> Sign Up!</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: App
    },
    SignUp: {
      screen: SignUp
    },

    Dashboard: {
      screen: Dashboard
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'float '
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'gray',
    marginVertical: 10
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
  },
  signUpCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 80
  },
  signUpText: {
    color: 'gray',
    fontSize: 16
  },
  signUpText1: {
    width: '100%',
    fontWeight: '500',
    color: colors.buttonColor,
    fontSize: 16
  }
});

export default createAppContainer(AppNavigator);
