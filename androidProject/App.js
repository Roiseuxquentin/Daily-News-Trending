import React, { Component } from 'react'
import config from './config.json'

import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'

import Loader from './components/loader.js'
import Home from './components/Home.js'
import HeaderZ from './components/HeaderZ.js'

import GiveMeMoneyStack from './components/GiveMeMoneyStack.js'
import GiveMeNewsPapers from './components/GiveMeNewsPapers.js'
import GiveMeGoogle from './components/GiveMeGoogle.js'
import GiveMeSante from './components/GiveMeSante.js'
import GiveMeActu from './components/GiveMeActu.js'
import GiveMePicture from './components/GiveMePicture.js'

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

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        scrollingPosition : false,
        loaded : false,
        data : "",
        grec : "" , 
        dorks : ["<XSS>"], 
        payload : [{ "description":"load..",
                "name":"XSS",
                "vector":"ghost"}]
    }
  }

  componentDidMount() {
    const settings = {  "method": "GET",
              "mode" : "cors" }

    fetch(`http://${config.ipData}/dayData`, settings)
    .then(res => res.json())
    .then(res => JSON.parse(res))
    .then(res => this.setState({data : res }))
    .then(() => {
      fetch(`http://${config.ipData}/nobel`, settings)
      .then(res => res.json() )
      .then(res => this.setState({nobel : res.nobel }))
      .then(() => { 
        fetch(`http://${config.ipData}/grec`, settings)
        .then(res => res.json() )
        .then(res => this.setState({grec : res.grec }))
        .then(() => {   
          fetch(`http://${config.ipData}/joke`, settings) 
          .then(res => res.json() )
          .then(res => this.setState({joke : res.joke}))
          .then(() => {
            fetch(`http://${config.ipData}/failles`, settings) 
            .then(res => res.json() )
            .then(res => this.setState({payload : res.payload , dorks : res.dorks }))
            .then(res => this.setState({loaded : 'home'}))
          })
        })
      })
    })
  }

  display(page) {
    if (!this.state.loaded) {
      return ( <View >
                <Loader />
               </View>)
    }else {
      switch (this.state.loaded) {
        case 'home' :
          return ( <Home grec={this.state.grec} actu={() => this.setState({ loaded : 'actu' })} />  )
          break;
        case 'actu' :
          return (
            <ScrollView style={{ height : '100%' }} >
              <HeaderZ />
              <GiveMeMoneyStack data={this.state.data} />
              <GiveMeNewsPapers />            
              <GiveMeGoogle data={this.state.data} />
              <GiveMeSante data={this.state.data} />            
              <GiveMePicture data={this.state.data} />           
              <GiveMeActu data={this.state.data} />           
            </ScrollView>
            )
          break;
        default :
          return ( <Loader />  )
      } 
            {/*
            <ScrollView style={{ height : '100%' }} >
              <GiveMeTwitter data={this.state.data} />
            </ScrollView>
            */}
    }
  }


  render() {
    return (

      <View style={{grid: 1}} >
        <StatusBar  hidden />
        {this.display('home')}
      </View>
    )
  }
}
