import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Welcomelogin from '../Components/Welcomelogin'
import Main from '../Components/Main'
import LoginScreen from '../Components/LoginScreen'


class Home extends React.Component {
  render() {
    return (
      <Myapp/>
    )
  }
}

const Myapp = createStackNavigator({
  Welcomelogin: {
    screen: Welcomelogin,
    navigationOptions: {
      title: 'ECOWASH',
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'blue',
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen}
  })

export default Home
