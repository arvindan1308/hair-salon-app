//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../colors';

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Book Code Here</Text>
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

//make this component available to the app
export default Home;
