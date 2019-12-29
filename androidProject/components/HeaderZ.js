import React from 'react'

import giveMeFrenchDay from './giveMeFrenchDay.js'

import googleImg from '../ressources/images/Google.png'
import twitterIMG from '../ressources/images/twitterIMG.jpg'
import searchImg from '../ressources/images/searchBar.png'

import {View, Text, StyleSheet, Image } from 'react-native'

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2019|| #
// #.\=============================================/.#
// ###################################################

export default function HeaderZ(props) {

  const aujourdhui = new Date()

  const giveMeDate = () => {
  	const date = aujourdhui.getDate()
  	return date
  }

  const giveMeTime = () => {
  	const heure = aujourdhui.getHours()
  	const minute = aujourdhui.getMinutes()
  	const time = `${heure} : ${minute}`
  	
  	return time 
  }

  const giveMeMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  const styles = StyleSheet.create({
    textGoogle : {
      // marginTop: 12,
      textAlign: 'center',
      alignSelf: 'stretch', 
      margin : 5,
      textAlign : 'center',
      fontStyle : 'italic',
      fontSize: 14,
    },
    textGrec : {
      textAlign : 'center',
      fontSize: 22,
    },
    imgGoogle : {
      width: '98%',
      zIndex : 0,
       height: 110,
       marginTop: 10
    },
    twitterIMG: {
      width : '100%',
      height : 150,
    },
    twitterText: {
      color : '#00acee',
      textAlign : 'center',
      fontSize: 42,
    },
    soustext : {
      color : '#00acee',
      textAlign : 'center',
      fontSize: 24,
    },
    homeText : {
      textAlign : 'center',
      fontFamily: 'sans-serif-thin',
      fontSize: 24,
    }, 
    container : {
      marginTop : 30,
    }
  })
    
  switch (props.page) {
    // Google
    case "google" :
      return (
        <View >
            <Image source={googleImg} style={styles.imgGoogle} />
        <View key={30 * Math.random()}  > 
                <Image  source={searchImg} style={{zIndex: 0, width: '100%', height: 50, resizeMode: 'stretch' , position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} />
            <Text style={styles.textGoogle} > {`Top des recherches google du jour.`}  </Text>
        </View>
        </View>)
      break
    // Twitter  
    case "twitter" :
      return (
        <View>
            <Image source={twitterIMG} style={styles.twitterIMG} />
            <Text style={styles.twitterText} >un {giveMeFrenchDay()} </Text>
            <Text style={styles.soustext} >À {giveMeTime()}</Text>
        </View>)
      break
    default :
      return (
          <View style={styles.container} >
            <Text style={styles.homeText} >{giveMeFrenchDay()} {giveMeDate()} { giveMeMonth[aujourdhui.getMonth()] }</Text>
        </View>)
  }

}