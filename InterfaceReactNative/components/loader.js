import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'

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
    marginTop: '60%'
  },
})

export default Loader;