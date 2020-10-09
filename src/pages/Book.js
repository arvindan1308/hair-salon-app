import React, { Component } from 'react';
import { View,StyleSheet,TouchableOpacity,Text,Image,} from 'react-native'; 
import {Calendar} from 'react-native-calendars';
import Firebase from '../config/firebase';
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
    this.props.navigation.navigate('Locate', { bookingDate : day })
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }  

  render() {
    return (
      
      <View style={styles.container}>
         <View style={styles.log}>  
         <Image source={require('../../images/HSLogo.png')}
          style={{height:180,width:200,marginTop:30,marginLeft:120}}/>
          <Text style={{marginLeft:135,fontWeight:'bold',fontSize:22,color:'black'}}> BARBER'S BLADE</Text>
        <TouchableOpacity 
          onPress={() => this._onPressBack() }>
          <Text style={styles.sel}></Text>
        </TouchableOpacity>
                    <Text></Text>
                    <Text></Text>
      </View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays = {true}
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: 'black',
            todayTextColor: 'red',
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
    flex:2,
    backgroundColor:'white'
  },
  calendar: {
    marginTop:250,
    borderTopWidth:3,
    paddingTop: 10,
    borderBottomWidth: 3,
    borderColor: 'black',
    height: 370,
    borderBottomWidth:3,
  },
  nextButton:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
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
  },
  cont:{
    marginTop:120,
    backgroundColor:'rgba(255,255,255,0.7)'
  },
  sel:{
    fontWeight:'bold',
    fontSize:22,
    color:'white',
    paddingLeft:10,
  },
  log:{
    flex:1
  }
});
//make this component available to the app
export default Home;