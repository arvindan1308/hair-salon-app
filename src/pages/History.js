//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../colors';
import Firebase from '../config/firebase';

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image source={require('../../images/HSLogo.png')}
            style={{ height: 180, width: 200, marginTop: 40, marginLeft: 25 }} />
          <Text style={{ marginLeft: 40, fontWeight: 'bold', fontSize: 22 }}> BARBER'S BLADE</Text>
          <View>
            <Text style={{ textAlign: 'center', marginTop: 180, fontWeight: 'bold', fontSize: 22 }}>Order History</Text>
          </View>
        </View>
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
