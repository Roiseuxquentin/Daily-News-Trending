import React, { Component } from 'react'

// import GiveMeRandomPic from './GiveMeRandomPic.js'

import { ActivityIndicator, StyleSheet, View } from 'react-native'

class Loader extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="#008F11" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor : 'rgba(29, 202, 255, 0.05)',
    justifyContent: 'center',
    marginTop: '80%'
  },
})

export default Loader;