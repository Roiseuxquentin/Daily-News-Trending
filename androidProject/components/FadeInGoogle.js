import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInGoogle = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: (300 * props.nb),
      }
    ).start();
  }, [])

  return (
      <Animated.View
        style={{
          opacity: fadeAnim,
      }} >
        <Text style={{ fontSize: 20 }} >{props.recherche}</Text>
      </Animated.View>   
  )
}

export default FadeInGoogle;