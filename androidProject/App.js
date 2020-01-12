import React, { Component } from 'react'
import config from './config.json'

import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'

import Home from './components/Home.js'
import OxygenScreen from './containers/OxygenScreen.js'
import ActuScreen from './containers/ActuScreen.js'

import HeaderZ from './components/HeaderZ.js'
import NavBar from './components/NavBar.js'
import Loader from './components/loader.js'

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
        data : {newsaudio : 'ok'},
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
          return ( <Home grec={this.state.grec} actu={() => this.setState({ loaded : 'actu'}) }
                                                 oxygen={() => this.setState({loaded : 'oxygen'})} />  )
          break;
        case 'actu' :
          return (<ActuScreen data={this.state.data} />)
          break;
        case 'oxygen' :
          return (<OxygenScreen data={this.state.data} />)
          break;
        default :
          return (<Loader />  )
      } 
    }
  }


  render() {
    return (
      <View style={{grid: 1}} >
        <NavBar home={() => this.setState({loaded : 'home'})} audio={this.state.data.newsaudio}  visible={this.state.loaded} />
        <StatusBar  hidden />
        {this.display('home')}
      </View>
    )
  }
}

