import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,Left } from "native-base";
import {Image,StyleSheet} from 'react-native';
import {
    MaterialCommunityIcons} from '@expo/vector-icons';
import { View } from "react-native-animatable";
class About1 extends Component {
  render() {
    return (
    <Container style={Styles.container}>
        <Header style={{backgroundColor:'black'}}/>
        <View style={{flex:1}}>
        <Image source={require('../../images/HSLogo.png')}
            style={{ height: 160, width: 200, marginTop: 30, marginLeft: 110 }} />
          <Text style={{ marginLeft: 120, fontWeight: 'bold', fontSize: 22 }}> BARBER'S BLADE</Text>
        <Text node style={{fontStyle:'italic',marginHorizontal:120}}>Your hair's destiny lies here</Text>
        <Content>
          <Card style={Styles.cont}>
            <CardItem>
              <Left>
                  <MaterialCommunityIcons name="details" size={26}/>
              <Body>
                  <Text>About </Text>
                </Body>
              </Left>
            </CardItem>   
             <CardItem bordered>
              <Body>
                <Text style={{fontStyle:'italic'}}>
                 Barber's Blade is the newly launched application for the barbers who wants to expland their bussiness.
                 With this application you can book the appointment whenever you want to.
                 You have the privilege to choose the shop and the hairsylist as well as the time you want.
                 For more information you can go to the help tab.  
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Thank You</Text>
            </CardItem>
            </Card>
            </Content>
            </View>
      </Container>
    );
  }
}

const Styles= StyleSheet.create({
    Container:{
        flex:2,

    },
    cont:{
        height:'400%',
        width:'95%',
        marginTop:90,
        borderColor:'black',
        borderBottomColor:'black',
        marginLeft:10,
    }
});
export default About1;