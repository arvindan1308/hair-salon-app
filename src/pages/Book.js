import React, { Component } from 'react';
import { View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import colors from '../../colors';
import {Calendar} from 'react-native-calendars';
// create a component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day })
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  render() {
    return (
      <View style={styles.container}>
             <View >
        <TouchableOpacity 
          onPress={() => this._onPressBack() }>
          <Text >Back</Text>
        </TouchableOpacity>
                    <Text></Text>
                    <Text></Text>
      </View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: 'black',
            todayTextColor: 'grey',
            arrowColor: 'black',
          }}
        />
         <TouchableOpacity
                style={styles.nextButton}
                onPress={() => this.props.navigation.navigate('Locate')}
              >
                <Text style={styles.nextText }> Next</Text>
              </TouchableOpacity>
      </View>
    
    );
  }
}
 

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: 'green',
    height: 350
  },
  nextButton:{
    display:'flex',
  alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.buttonColor,
    borderRadius: 30,
    width: 180,
    height: 60,
    textAlign:'center',
  
    marginVertical: 120,
    marginHorizontal:120
  },
  nextText: {
    color: 'white',
    fontSize: 24,
    fontWeight:'bold',
    
  }
});
//make this component available to the app
export default Home;