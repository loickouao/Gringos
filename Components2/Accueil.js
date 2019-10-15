import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'

class Accueil extends React.Component {
  render() {
    return (
      <View style={{ flex:1 }}>
          <ImageBackground source={require('../Images/tissufond.png')} style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()} style={{ paddingTop : 40, paddingHorizontal: 20 }}>
              <Image source={require('../Images/menu_icon.png')} style={ styles.menu_ic }>
              </Image>
            </TouchableOpacity>
            <View style={styles.img}>
              <Image source={require('../Images/logo.png')}>
              </Image>
            </View>
          </ImageBackground>
          <View style={styles.content}>
              <View style={styles.content00}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')} style={styles.content1}>
                    <Image source={require('../Images/trait_rouge.png')} style={{width:130, height:30}}>
                    </Image>
                    <Text style={styles.contentTitle}>Profil</Text>
                    <Text>Aucune CB</Text>
                    <View style={{alignItems: 'flex-end', paddingRight:10}}>
                      <Image source={require('../Images/person.png')} style={{width:40, height:40}}>
                      </Image>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Commandes')} style={styles.content1}>
                    <Image source={require('../Images/trait_belge.png')} style={{width:130, height:30}}>
                    </Image>
                    <Text style={styles.contentTitle}>Commandes</Text>
                    <Text>Aucune</Text>
                    <View style={{alignItems: 'flex-end', paddingRight:10}}>
                      <Image source={require('../Images/commande_icon.png')} style={{width:40, height:40}}>
                      </Image>
                    </View>
                  </TouchableOpacity>
              </View>
              <View style={styles.content01}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Abonnements')} style={styles.content1}>
                    <Image source={require('../Images/trait_belge.png')} style={{width:130, height:30}}>
                    </Image>
                    <Text style={styles.contentTitle}>Abonnements</Text>
                    <Text>Non Abonné</Text>
                    <View style={{alignItems: 'flex-end', paddingRight:10}}>
                      <Image source={require('../Images/abonnement.png')} style={{width:40, height:40}}>
                      </Image>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Messagerie')} style={styles.content1}>
                    <Image source={require('../Images/trait_belge.png')} style={{width:130, height:30}}>
                    </Image>
                    <Text style={styles.contentTitle}>Support</Text>
                    <Text>Pas de message</Text>
                    <View style={{alignItems: 'flex-end', paddingRight:10}}>
                      <Image source={require('../Images/message.png')} style={{width:40, height:40}}>
                      </Image>
                    </View>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.ajoutcommande}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>Nouvelle Commande </Text>
            <Image source={require('../Images/ajout.png')} style={{width:40, height:40}}>
            </Image>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    //paddingVertical: 78,
  },
  menu_ic: {
    height:35, width:40
  },
  content: {
    flex: 1.3,
    borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent:'center',
    padding: 20
  },
  content00: {
    flexDirection: 'row'
  },
  content01: {
    flexDirection: 'row'
  },
  content1: {
    paddingLeft: 7  ,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
    margin: 3,
    backgroundColor: '#fff',
    height: 140,
  },
  contentTitle: {
     fontWeight: 'bold', fontSize: 25
  },
  ajoutcommande: {
    flex: 0.2,
    borderColor: '#000',
    borderWidth: 4,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default Accueil
