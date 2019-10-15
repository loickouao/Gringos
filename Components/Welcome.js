import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

class Welcome extends React.Component {
  //composant s'effectuant avant le premier rendu
  componentWillMount() {
    myVar = setTimeout(() =>{this.props.navigation.navigate('Home')
  },3000)
  }
  render() {
    return (
      <ImageBackground source={require('../Images/fond.png')}
        style={styles.container}>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Welcome
