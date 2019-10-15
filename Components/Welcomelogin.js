import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../Components/HomeScreen'

class Welcomelogin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 10, backgroundColor: 'white' }}>
          <HomeScreen/>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'skyblue'}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Main')}} >
              <Image style={styles.img}
                source={require('../Images/home1.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('LoginScreen')}} >
              <Image style={styles.img}
                source={require('../Images/person.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40
  },
  button: {
  }
})

export default Welcomelogin
