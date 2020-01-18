import React, { Component } from 'react'

import waiting from '../ressources/images/news0014.gif'
import loading from '../ressources/images/loading.gif'
import { Text, View, Image } from 'react-native'

class Loader extends Component {
  render() {
    return (
      <View key={Math.random() * 10} style={{position : 'absolute' }}>
        <Image source={waiting} style={{height : 750,width : 360 , zIndex : 0 }} />
        
        <View style={{textAtlin : 'center',justifyContent : 'center', position : 'absolute', zIndex : 5 , flex : 1, top : 75 , left : 30 }}>
          <Text style={{ fontSize : 24 , zIndex : 0, margin : 20,  }} > "Les murs murant Paris , rendent Paris murmurant" Hugo </Text>
        </View>

        <View style={{position : 'absolute', zIndex : 5 , flex : 1, top : 290 , left : -20}}>
          <Image source={loading} style={{height : 400, width : 400 , zIndex : 0,  }} />
        </View>
      </View>
    )
  }
}

export default Loader;