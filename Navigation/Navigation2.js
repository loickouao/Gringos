import React from 'react'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import Navigation3 from '../Navigation/Navigation3' // pour aller sur l'acceuil et naviguer vers les 4 composants
import Commandes from '../Components2/Commandes'
import Factures from '../Components2/Factures'
import Adresses from '../Components2/Adresses'
import Abonnements from '../Components2/Abonnements'
import Paiement from '../Components2/Paiements'
import Navigation4 from '../Navigation/Navigation3' //pour aller du profil et naviguer vers connexion
import Messagerie from '../Components2/Messagerie'
import Parametres from '../Components2/Parametres'
import Deconnexion from '../Components2/Deconnexion'

class Navigation2 extends React.Component {
  render() {
    return (
      <DrawerNav/>
    )
  }
}
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex:1 }}>
    <View style={{ height:150, backgroundColor: 'white', paddingTop:20,
        paddingBottom:20,
        paddingLeft:55,
        paddingRight:75}}>
        <Image source={require('../Images/man.png')} style={{ height:120, width:120, borderRadius: 60 }} />
    </View>
    <ScrollView style={{ backgroundColor:'skyblue'}}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const DrawerNav = createDrawerNavigator({
  Accueil: {
    screen: Navigation3
  },
  Commandes: {
    screen: Commandes },
  Factures: {
    screen: Factures },
  Adresses: {
    screen: Adresses },
  Abonnements: {
    screen: Abonnements },
  Paiement: {
    screen: Paiement },
  Profil: {
    screen: Navigation4 },
  Messagerie: {
    screen: Messagerie },
  Parametres: {
    screen: Parametres },
  Deconnexion: {
    screen: Deconnexion }
},{
  contentComponent: CustomDrawerComponent,
  drawerWidth: 240,
  contentOptions:{
    activeTintColor: 'white',
    activeBackgroundColor :'#1999CE',
  }
})

export default Navigation2
