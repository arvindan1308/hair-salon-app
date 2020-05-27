import React from 'react';
import {
   ScrollView, View, Image, StyleSheet,TouchableOpacity,Text
} from 'react-native';
import { Picker } from 'react-native-picker-dropdown';

import Firebase from '../config/firebase';

class salon1 extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { time: '10am-12am',stylist='Abdul' }
    this.onValueChange = this.handleValueChange.bind(this)
  }
  saveToDB = () => {
    Firebase.firestore().collection("Bookings").add({
      Time: this.state.time,
      Stylist: this.state.stylist,
    })
      .then(
        console.log("Document added")
      )
      .catch((error) =>
        console.error("Error adding document: ", error)
      );

  }
  handleValueChange(data,type) {
    if(type === 'time'){
      this.setState({
        time:data
      })
    } else if(type === 'stylist'){
      this.setState({
        stylist:data
      })
    }
  }
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView
        scrollEventThrottle={16}
        /> 
        <View style={{height:130,marginTop:20}}>
          <ScrollView>
            <View style={{height:130,width:130}}>
              <View style={{flex:2}}>
                <Image source={require('../../images/salon1.jpg')}
                style={{flex:1,height:null,width:null,resizeMode:'cover'}}
                /> 
                </View>
              </View>
            </ScrollView>
          </View>
          <Picker
          selectedValue={this.state.time}
          onValueChange={(data) => this.onValueChange(data,'time')}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="10am-12am" value="10am-12am" />
          <Picker.Item label="12am-2pm" value="12am-2pm" />
          <Picker.Item label="3pm-5pm" value="3pm-5pm" />
          <Picker.Item label="5pm-7pm" value="5pm-7pm" />
          <Picker.Item label="7pm-9pm" value="7pm-9pm" />
        </Picker>
        <Picker
          selectedValue={this.state.stylist}
          onValueChange={(data) => this.onValueChange(data,'stylist')}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="Abdul" value="Abdul" />
          <Picker.Item label="Ravi" value="Ravi" />
          <Picker.Item label="Vickey" value="Vickey" />
          <Picker.Item label="Chetan" value="Chetan" />
          <Picker.Item label="Dabbu Ratnani" value="Dabbu Ratnani" />
        </Picker>
        <View>
        <TouchableOpacity
                style={styles.nextButton}
                onPress={this.saveToDB}
              >
                <Text style={styles.nextText }>Book</Text>
              </TouchableOpacity>
      </View>
      </View>
    );
  }
}

//define style
const styles = StyleSheet.create({
  Container: {
    width: 300,
    height: 200,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:200,
    borderColor: 'black',
  },
  pickerText: {
    color: 'black',
    borderColor:'black',
    width:200,
    height:200
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
})
export default salon1;  