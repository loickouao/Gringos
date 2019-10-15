import { createStackNavigator } from 'react-navigation'
import Welcome from '../Components/Welcome'
import Home from '../Components/Home'

const Navigation_screen = createStackNavigator({
  Welcome: { // Ici j'ai appelé la vue "Welcome" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
      }
  }
})

export default Navigation_screen
