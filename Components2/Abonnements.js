import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

class Abonnements extends React.Component {
  render() {
    return (
      <View style={{ flex:1}}>
        <Text style={styles.contentTitle}>Bénéficiez de multiples avantages à être Abonné</Text>

        <Text style={{ padding:20, fontWeight: 'bold', fontSize: 18 }}> Aucune avance de frais, une facture en fon de mois, un règlement en toute sécurité</Text>

        <View style={{ flex:2 ,borderColor: 'black', margin:2, borderWidth: 1, flexDirection: 'row'}}>
            <View style={ styles.abonnement1}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color:'gray'}}>Silver</Text>
                <View  style={{flex:1, padding:10}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16}} >50.000 fcfa / mois</Text>
                </View>
            </View>
            <View style={ styles.abonnement1} >
              <Text style={{ fontWeight: 'bold', fontSize: 25, color:'yellow'}}>Gold</Text>
              <View  style={{flex:1, padding:10}}>
                <Text style={{ fontWeight: 'bold', fontSize: 16}} >100.000 fcfa / 3 mois</Text>
              </View>
            </View>
        </View>
        <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, color:'red'}}>Paiement</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  contentTitle: {
   fontWeight: 'bold', fontSize: 25, padding:20
 },
 abonnement1: {
  flex:1,
  alignItems: 'center',
  backgroundColor:'skyblue',
  borderColor: 'skyblue',
  margin:10,
  borderRadius: 10,
  borderWidth: 1,
  }

})

export default Abonnements
