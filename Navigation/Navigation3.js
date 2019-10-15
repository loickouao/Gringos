import { createStackNavigator } from 'react-navigation'
import Accueil from '../Components2/Accueil'
import Navigation4 from '../Navigation/Navigation4'
import Abonnements from '../Components2/Abonnements'
import Messagerie from '../Components2/Messagerie'
import Commandes from '../Components2/Commandes'

const Navigation_3 = createStackNavigator({
  Accueil: {
    screen: Accueil,
    navigationOptions: {
      header: null
    }
  },
  Profil: {
    screen: Navigation4,
    navigationOptions: {
      title: 'Profil',
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'blue',
    },
  },
  Abonnements: {
    screen: Abonnements,
    navigationOptions: {
      title: 'Abonnements',
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'blue',
    },
  },
  Commandes: {
    screen: Commandes,
    navigationOptions: {
      title: 'Commandes',
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'blue',
    },
  },
  Messagerie: {
    screen: Messagerie,
    navigationOptions: {
      title: 'Messagerie',
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: 'blue',
    },
  }
})

export default Navigation_3
