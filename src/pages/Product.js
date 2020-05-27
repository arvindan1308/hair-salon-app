import React, { Component } from "react";
import {  Header, Text,} from "native-base";
import {Image,StyleSheet} from 'react-native';
import { View } from "react-native-animatable";
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView } from "react-navigation";
class Product extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: 'Hey, please give us review about the application or the shop which you are visited',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'FAQ Bot',
          avatar: 'https://i.imgur.com/7k12EPD.png'
        }
      }
    ]
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={styles.Container}>
        <Header style={{backgroundColor:'black'}}/>
        <View style={{flex:1}}>
        <Image source={require('../../images/HSLogo.jpg')}
            style={{ height: 160, width: 200, marginTop: 30, marginLeft: 110 }} />
          <Text style={{ marginLeft: 120, fontWeight: 'bold', fontSize: 22 }}> BARBER'S BLADE</Text>
        <Text node style={{fontStyle:'italic',marginHorizontal:120}}>Your hair's destiny lies here</Text>
        <View style={styles.chat}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
        </View>
        </View>
        </View>
        </SafeAreaView>
    );
  }
}

const styles= StyleSheet.create({
    Container:{
        flex:2,

    },
    cont:{
        height:'400%',
        width:'100%',
        marginTop:120
    },
    chat:{
      flex:2,
    paddingBottom:20 }
});
export default Product;