import { createStackNavigator } from 'react-navigation'
import Profil from '../Components2/Profil'
import LoginScreen from '../Components/LoginScreen'


const Navigation_4 = createStackNavigator({
  Profil: {
    screen: Profil,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    },
  },
})

export default Navigation_4
