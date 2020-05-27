//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import * as firebase from 'firebase';

import Book from '../pages/Book';
import Locate from '../pages/Locate';
import History from '../pages/History';
import Profile from '../pages/Profile';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import colors from '../../colors';

// create a component
class Dashboard extends Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
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
  }
});

export default createMaterialBottomTabNavigator(
  {
    Book: {
      screen: Book,
      navigationOptions: {
        tabBarLabel: 'Book',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='plus-square' size={22} color={tintColor} />
        )
      }
    },
    Locate: {
      screen: Locate,
      navigationOptions: {
        tabBarLabel: 'Locate',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='md-planet' color={tintColor} size={26} />
        )
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='history' color={tintColor} size={22} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='md-person' color={tintColor} size={26} />
        )
      }
    }
  },
  {
    initialRouteName: 'Book',
    activeColor:'grey',
    inactiveColor: '#8e8e8e',
    barStyle: { backgroundColor: 'black' },
    shifting: 'true',
    labeled: 'true',
    swipeEnabled:true,
    animationEnabled:true
  }
);
