import React, {Component} from 'react';
import {Text,View,StyleSheet, Alert,TouchableOpacity} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { colors } from 'react-native-elements';
import * as firebase from 'firebase';
class ResetPassword extends React.Component{
    
constructor(props) {
    super(props);
    this.state={
        newPassword: "",
    };
  }
  onChangePasswordPress= () =>{
    var user = firebase.auth().currentUser;
    user.updatePassword(this.state.newPassword).then(() =>{
        Alert.alert("Password was changed");
    }).catch((error) => {
        Alert.alert(error.message);
    });
  }
    render(){
        return(
            <View style={styles.container}> 
                <TextInput style={styles.textinp} value={this.state.newPassword}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Password you remember'
                placeholderTextColor='gray' 
                secureTextEntry={true}
                autoCapitalize='none'
                onChangeText={(text) => {this.setState({newPassword: text}) }}
                /> 
                
                <TouchableOpacity
                style={styles.forgotpass}
                onPress={this.onChangePasswordPress}
              >
                <Text style={styles.forgotText}>Change Password</Text>
              </TouchableOpacity>

                <Button title="Change password" />                
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        backgroundColor: colors.bgColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textinp:{
    width: 400,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'grey',
    marginVertical: 10,
    marginLeft:15,
    marginRight:15,
    
    },
    forgotText:{
        color: 'grey',
        fontSize: 16,
        fontWeight:'bold',
        paddingTop:10,
      },
      forgotpass:{
        width: 180,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 25,
        paddingBottom:10,
        fontSize: 16,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:15
      }
})
export default ResetPassword;