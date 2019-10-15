import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} > interface Inscription </Text>
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
  text: {
    fontSize: 30
  }
})

export default SignUpScreen
