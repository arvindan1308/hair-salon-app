import React from 'react';
import {
   ScrollView, View, Image, StyleSheet, Text
} from 'react-native';
import { Picker } from 'react-native-picker-dropdown';
class salon1 extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { language: 'js1' }
    this.onValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(language) {
    this.setState({ language })
  }
  render() {
    return (
      <View style={styles.Container}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="10am-12am" value="js1" />
          <Picker.Item label="12am-2pm" value="js" />
          <Picker.Item label="3pm-5pm" value="ruby" />
          <Picker.Item label="5pm-7pm" value="python" />
          <Picker.Item label="7pm-9pm" value="elm" />
        </Picker>
        <ScrollView
        scrollEventThrottle={16}
        > 
        <View style={{height:130,marginTop:20}}>
          <ScrollView>
            <View style={{height:130,width:130}}>
              <View style={{flex:2}}>
                <Image source={require('../../images/salon5.jpg')}
                style={{flex:1,height:null,width:null,resizeMode:'cover'}}
                /> 
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

//define style
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  pickerText: {
    color: 'black',
  }
})
export default salon1;  