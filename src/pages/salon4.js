import React, { Component } from 'react';
import {
  View, TextInput, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity
} from 'react-native';
import {
  Container, Header, Content, Card, CardItem, Left, Body, Button,
} from 'native-base';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Picker } from 'react-native-picker-dropdown';
import Firebase from '../config/firebase';

class salon4 extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { time: '10am-12am', stylist: 'Arun' }
    this.onValueChange = this.handleValueChange.bind(this)
  }
  saveToDB = () => {
    Firebase.firestore().collection("Bookings").add({
      Time: this.state.time,
      stylist: this.state.stylist,
    })
      .then(
        console.log("Document added")
      )
      .catch((error) =>
        console.error("Error adding document: ", error)
      );

  }
  handleValueChange(data, type) {
    if (type === 'time') {
      this.setState({
        time: data
      })
    } else if (type === 'stylist') {
      this.setState({
        stylist: data
      })
    }
  }
  render() {
    return (
      <SafeAreaView flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={{ backgroundColor: 'white' }}>
            <Header style={{ backgroundColor: 'black' }} />
            <View>
              <Text>
              </Text>
              <View style={{ flex: 1, paddingTop: 20 }}>
                <Text style={{
                  fontSize: 26, fontWeight: '700', paddingHorizontal: 20, fontStyle: 'italic',
                  backgroundColor: 'white', marginLeft: 25
                }}>
                  Photos
              </Text>
                <View style={{ marginTop: -37, marginLeft: 12 }}>
                  <Button transparent>
                    <Ionicons name='md-photos' size={28} />
                  </Button>
                </View>
                <View style={{ height: 160 }}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ height: 130, marginTop: 20 }}>
                      <View style={{ height: 150, width: 150, marginLeft: 20, borderWidth: 0.5, borderColor: 'grey' }}>
                        <Image source={require('../../images/pic1.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                        />
                      </View>
                    </View>
                    <View style={{ height: 130, marginTop: 20 }}>
                      <View style={{ height: 150, width: 150, marginLeft: 15, borderWidth: 0.5, borderColor: 'grey' }}>
                        <Image source={require('../../images/pic3.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                        />
                      </View>
                    </View>
                    <View style={{ height: 130, marginTop: 20 }}>
                      <View style={{ height: 150, width: 150, marginLeft: 15, borderWidth: 0.5, borderColor: 'grey' }}>
                        <Image source={require('../../images/pic5.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                        />
                      </View>
                    </View>
                    <View style={{ height: 130, marginTop: 20 }}>
                      <View style={{ height: 150, width: 150, marginLeft: 15, borderWidth: 0.5, borderColor: 'grey' }}>
                        <Image source={require('../../images/pic9.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                        />
                      </View>
                    </View>
                    <View style={{ height: 130, marginTop: 20 }}>
                      <View style={{ height: 150, width: 150, marginLeft: 10, borderWidth: 0.5, borderColor: 'grey' }}>
                        <Image source={require('../../images/pic11.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover', marginEnd: 10 }}
                        />
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <Picker
                  selectedValue={this.state.time}
                  onValueChange={(data) => this.onValueChange(data, 'time')}
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
                  onValueChange={(data) => this.onValueChange(data, 'stylist')}
                  mode="dialog"
                  textStyle={styles.pickerText1}
                >
                  <Picker.Item label="Arun" value="Arun" />
                  <Picker.Item label="Aarav" value="Aarav" />
                  <Picker.Item label="Mayuri" value="Mayuri" />
                  <Picker.Item label="Saloni" value="Saloni" />
                  <Picker.Item label="Shree" value="Shree" />
                </Picker>
                <View>
                  <TouchableOpacity
                    style={styles.nextButton1}
                    onPress={this.saveToDB}
                  >
                    <Text style={styles.nextText1}>Book</Text>
                  </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={this.saveToDB}
                  >
                    <Text style={styles.nextText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Container style={{
              backgroundColor: 'grey', height: 180, width: 400,
              marginTop: 220, marginBottom: 340, marginLeft: 10
            }}>
              <Content padder>
                <Card transparent>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Entypo name="location" size={26} />
                      </Button>
                      <Body style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 22 }}>
                        Shop No. 6, Satellite Tower Layout, A K Vaidya Marge, 
                        Film City Road, Goregaon East, Mumbai, Maharashtra 400062
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </Content>
            </Container>
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  pickerText: {
    color: 'black',
    borderColor: 'black',
    width: 200,
    height: 200,
    marginTop: 140,
    marginLeft:5,
  },
  pickerText1: {
    color: 'black',
    borderColor: 'black',
    width: 200,
    height: 200,
    marginTop: 140,
    marginLeft: 220,
  },
  nextButton: {
    display: 'flex',
    backgroundColor: 'red',
    borderRadius: 30,
    width: 170,
    height: 60,
    textAlign: 'center',
    marginVertical: 120,
    marginHorizontal: 120,
    marginTop: 460,
    textAlign: 'center',
    alignItems: 'flex-start',
    marginLeft: 230,
  },
  nextText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal:50,
    marginTop: 15
  },
  
  nextButton1: {
    display: 'flex',
    backgroundColor: 'black',
    borderRadius: 30,
    width: 160,
    height: 60,
    textAlign: 'center',
    marginVertical: 120,
    marginHorizontal: 120,
    marginTop: 460,
    textAlign: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  nextText1: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal:50,
    marginTop: 15
  },
});
export default salon4;