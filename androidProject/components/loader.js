import React, { Component } from 'react'
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
    justifyContent: 'center',
    marginTop: '80%'
  },
})

export default Loader;