import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class Messagerie extends React.Component {
  render() {
    return (
      <View>
        <Text style= {{ fontWeight: 'bold', fontSize: 25, color:'gray'}} >Vous n avez pas de messages</Text>
      </View>
    )
  }
}


export default Messagerie
