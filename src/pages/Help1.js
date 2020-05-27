import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,Left } from "native-base";
import {Image,StyleSheet} from 'react-native';
import {
    Entypo,MaterialCommunityIcons} from '@expo/vector-icons';
import { View } from "react-native-animatable";
class About1 extends Component {
  render() {
    return (
    <Container style={Styles.container}>
        <Header style={{backgroundColor:'black'}}/>
        <View style={{flex:1}}>
        <Image source={require('../../images/HSLogo.jpg')}
            style={{ height: 160, width: 200, marginTop: 30, marginLeft: 110 }} />
          <Text style={{ marginLeft: 120, fontWeight: 'bold', fontSize: 22 }}> BARBER'S BLADE</Text>
        <Text node style={{fontStyle:'italic',marginHorizontal:120}}>Your hair's destiny lies here</Text>
        <Content>
          <Card style={Styles.cont}>
            <CardItem>
              <Left>
                  <Entypo name="help" size={26}/>
              <Body>
                  <Text>Help </Text>
                </Body>
              </Left>
            </CardItem>   
             <CardItem bordered>
              <Body>
                <Text style={{fontStyle:'italic',fontSize:22,fontWeight:'bold'}}>
                  How to use book an appointment:- 
                </Text>
                <Text style={{fontStyle:'italic',fontSize:18}}> 
                Step1: Select the date from the calendar and click on next 
                </Text>
                <Text style={{fontStyle:'italic',fontSize:18}}> 
                Step2: Search the shop and selct on the shop.</Text>
                <Text style={{fontStyle:'italic',fontSize:18}}> 
                Step3: Click on the drop down and select the date and the hairstylist name with whom you want 
                do the haircut.
                </Text>
                <Text style={{fontStyle:'italic',fontSize:18}}> 
                Step4: Click on the book button , your appointment will be get fixed.  
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
        flex:1
    },
    cont:{
        height:'200%',
        width:'95%',
        marginTop:90,
        borderColor:'black',
        borderBottomColor:'black',
        marginLeft:10,
 }
});
export default About1;