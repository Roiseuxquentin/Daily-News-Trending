import React, { Component } from 'react'
import config from './config.json'

import { StatusBar, StyleSheet, Text, View } from 'react-native'

import Loader from './components/loader.js'
import Home from './components/Home.js'

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

    // fetch(`http://${config.ipData}/dayData`, settings)
    // .then(res => res.json())
    // .then(res => JSON.parse(res))
    // .then(res => this.setState({data : res }))
    // .then(() => {
    //   fetch(`http://${config.ipData}/nobel`, settings)
    //   .then(res => res.json() )
    //   .then(res => this.setState({nobel : res.nobel }))
    //   .then(() => { 
    //     fetch(`http://${config.ipData}/grec`, settings)
    //     .then(res => res.json() )
    //     .then(res => this.setState({grec : res.grec }))
    //     .then(() => {   
    //       fetch(`http://${config.ipData}/joke`, settings) 
    //       .then(res => res.json() )
    //       .then(res => this.setState({joke : res.joke}))
    //       .then(() => {
    //         fetch(`http://${config.ipData}/failles`, settings) 
    //         .then(res => res.json() )
    //         .then(res => this.setState({payload : res.payload , dorks : res.dorks }))
    //         .then(res => this.setState({loaded : true}))
    //       })
    //     })
    //   })
    // })
  }

  display(page) {
    if (this.state.loaded) {
        return ( <Home />  )
            {/*
            <ScrollView style={{ height : '100%' }} >
              <HeaderZ />
              <GiveMeMoney data={this.state.data} />
              <GiveMeNewsPapers />            
              <GiveMeGoogle data={this.state.data} />
              <GiveMeSante data={this.state.data} />            
              <GiveMeSPicture data={this.state.data} />           
              <GiveMeActu data={this.state.data} />           
              <GiveMeTwitter data={this.state.data} />
            </ScrollView>
            */}
    }else {
      return ( <View>
        <Text>hellow</Text>
                <Loader />
               </View>)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
