import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

class Profil extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
            <Image source={require('../Images/man.png')} style={{ height:120, width:120, borderRadius: 60 }} />
            <Text style={{padding:20, fontSize:20, fontWeight:'bold'}}>Aucun profil disponible</Text>
          </View>
          <View style={{ flex: 1 }}>

            <Text style={{padding:20, fontSize:20, fontWeight:'bold'}}>Vous n êtes pas encore connecté</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('LoginScreen')}} style={styles.button} >
                <Text style={{padding:20, fontSize:20, fontWeight:'bold'}}>Connexion </Text>
                <Image style={styles.img}
                  source={require('../Images/person.png')}
                />
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 40,
    height: 40
  },
  button: {
    flexDirection: 'row',
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10
  }
})

export default Profil
