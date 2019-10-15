import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button } from 'react-native';

import * as firebase from 'firebase';

//Initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyB91ZOaB4_ffUifVTZMVy68caz2f3NJyyU",
  authDomain: "gringo-d48a5.firebaseapp.com",
  databaseURL: "https://gringo-d48a5.firebaseio.com",
  projectId: "gringo-d48a5",
  storageBucket: "gringo-d48a5.appspot.com",
};

firebase.initializeApp(firebaseConfig);

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../Images/logo.png')}>
        </Image>
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Email"
        placeholderTextColor = "#ffffff" />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password"
        secureTextEntry= {true}
        placeholderTextColor = "#ffffff" />
        <Button title="Connexion" onPress={() => this.props.navigation.navigate('Main')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },
  inputBox: {
    width: 300,
    height: 40,
    backgroundColor:'rgba(0,0,0,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  }
})

export default LoginScreen
