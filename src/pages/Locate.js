//import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TextInput,
  SafeAreaView
} from 'react-native';
import colors from '../../colors';
import {
  Container, Header, Content, Card, CardItem, Thumbnail,
  Button, Icon, Left, Body, Right
} from 'native-base';
import { Title } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import StarRating from 'react-native-star-rating';

// create a component

class Home extends Component {

  state = {
    searchBarFocused: true,
    searchText: '',
    data: [
      {
        key: 0,
        title: "Kapil's Salon & Academy",
        tagline: "The best for You",
        discount: '30%',
        time: '10AM to 9PM',
        likes: '12.1k',
        comments: '2378',
        ratings: 4,
        navigation: 'salon1',
        image_uri:'https://firebasestorage.googleapis.com/v0/b/hair-salon-app-3047c.appspot.com/o/salon1.jpg?alt=media&token=f0cd1810-484c-4454-9a0c-d7a0c9a1a802',
      },
      {
        key: 1,
        title: "Enrich Salon",
        tagline: "Enrich starts from here",
        discount: '25%',
        time: '10AM to 9PM',
        likes: '9k',
        comments: '3488',
        ratings: 4.5,
        navigation: 'salon2',
        image_uri:'https://firebasestorage.googleapis.com/v0/b/hair-salon-app-3047c.appspot.com/o/salon2.jpg?alt=media&token=37af7401-7374-4d70-8301-8c546356b734'
      },
      {
        key: 2,
        title: "Envi Salon",
        tagline: "Be Simple and unique",
        discount: '30%',
        time: '10AM to 9PM',
        likes: '15.3k',
        comments: '1098',
        ratings: 3.6,
        navigation: 'salon3',
        image_uri:'https://firebasestorage.googleapis.com/v0/b/hair-salon-app-3047c.appspot.com/o/salon3.jpg?alt=media&token=552e197e-6c44-4aee-bbf9-8671bafe2096'
      },
      {
        key: 3,
        title: "Radiance Salon and Spa",
        tagline: "Beauty in yoU",
        discount: '50%',
        time: '11AM to 9PM',
        likes: '10.9k',
        comments: '2000',
        ratings: 3,
        navigation: 'salon4',
        image_uri:'https://firebasestorage.googleapis.com/v0/b/hair-salon-app-3047c.appspot.com/o/salon4.jpg?alt=media&token=5ac3b849-1e0f-4474-97d6-1e98bb1fbf9a'
      },
      {
        key: 4,
        title: "NailDistrict.In",
        tagline: "Be calm and chill",
        discount: '25%',
        time: '10AM to 9PM',
        likes: '9k',
        comments: '3488',
        ratings: 4.3,
        navigation: 'salon5',
        image_uri:'https://firebasestorage.googleapis.com/v0/b/hair-salon-app-3047c.appspot.com/o/salon5.jpg?alt=media&token=677e4411-9628-4948-a2de-4523e41c1e8b'
      }
    ]
  };
  getSearchResults = () => {
    console.log(this.state.searchText)
    if(this.state.searchText.length > 0){
      return this.state.data.filter(salon => {
        const data = salon.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
        console.log(data)
        return data;
      })
    } else{
      return this.state.data
    }
  
  }
  handleChange = (text) => {
    console.log(text)
    this.setState({
      searchText: text
    })
  }
  render() {

    // let text = '';
    return (
      <SafeAreaView flex={1}>
        <Container style={{ backgroundColor: '#262625' }}>
          <Header style={{ backgroundColor: '#262625' }} />
          <View style={{
            backgroundColor: '#262625', height: 80,
            justifyContent: 'center', paddingHorizontal: 5
          }}>
            <Animatable.View animation="slideInRight" style={
              { height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 25 }}>
              <Icon name={"md-search"} />
              <TextInput placeholder="Search" value={this.state.searchText} style={{ fontSize: 24, marginLeft: 15,width:200 }} onChangeText={(text) => this.handleChange(text)} />
            </Animatable.View>
          </View>
          <ScrollView>
            {this.getSearchResults().map(salon => {
              return (
                <Content key={salon.key}>
                  <Card>
                    <CardItem button onPress={() => this.props.navigation.navigate(salon.navigation)}>
                      <Left>
                        <Thumbnail
                          source={{uri:salon.image_uri}}
                          style={{ width: 80, height: 60, borderRadius: 25, marginRight: 5 ,}} />
                        <Body style={{ alignItems: 'flex-start' }}>
                          <Title>{salon.title}</Title>
                          <Text note>{salon.tagline}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent>
                          <Icon active name="thumbs-up" />
                          <Text> {salon.likes} Likes</Text>
                        </Button>
                      </Left>
                      <Body>
                        <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>{salon.comments} Comments</Text>
                        </Button>
                      </Body>
                      <Right>
                        <View style={{ alignItems: 'flex-end', top: -55 }}>
                          <Text note> Discount upto {salon.discount}</Text>
                          <Text note> Time {salon.time}</Text>
                        </View>
                        <StarRating
                          disable={true}
                          maxStar={5}
                          rating={salon.ratings}
                          starSize={16}
                        >
                        </StarRating>
                      </Right>
                    </CardItem>
                  </Card>
                </Content>

              )
            })}
         
           
            {/* <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
          </View> */}
          </ScrollView>
        </Container>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 15
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },

});

//make this component available to the app
export default Home;

