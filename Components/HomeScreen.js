import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'

class HomeScreen extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>

        <ImageBackground source={require('../Images/fond1.png')}
        style={styles.slide1}>
          <Text style={styles.text}></Text>
          <Image source={require('../Images/logo.png')}>
          </Image>
        </ImageBackground>

        <ImageBackground source={require('../Images/fond4.png')}
        style={styles.slide2}>
          <Image source={require('../Images/tee_shirt.png')}>
          </Image>
          <Text style={styles.text}>Votre blanchisserie et</Text>
          <Text style={styles.text}>pressing livrés à</Text>
          <Text style={styles.text}>domicile en 48h</Text>
        </ImageBackground>

        <ImageBackground source={require('../Images/fond2.png')}
        style={styles.slide3}>
          <Text style={styles.text}>Des vêtements toujours</Text>
          <Text style={styles.text}>impeccable grace à mon</Text>
          <Text style={styles.text}>abonnement Gringo</Text>
        </ImageBackground>
      </Swiper>
    )
  }
}

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
}

export default HomeScreen
