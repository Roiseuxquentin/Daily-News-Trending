import React, {Component} from 'react'

import { Image, View } from 'react-native'

import config from '../config.json'

import giveMeRandomNumber from './giveMeRandomNumber.js'

import Loader from './loader.js'

/*==========================================='\ 
||                      .__                  || 
||   ____   ____   ____ |  |   ____   ____   || 
|| _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || 
|| \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || 
||  \___  >\___  >___  /|____/\____/ \____/  || 
||      \/     \/_____/                  2020|| 
\.===========================================*/

class GiveMeRandomPic extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  url : false,
			  size : 345
  		}
	}

	componentDidMount() {
		if ( this.props.mini ) {
			this.setState({size : 140 })
		} 
		this.setState({url : `http://${config.ipData}/ressources/${this.props.data}/${this.props.data}00${giveMeRandomNumber(1,this.props.max)}.gif` })
	}

	render() {
		if (!this.state.url) {
			return <Loader />
		} else {
			return ( <View style={{flex : 1 , justifyContent : 'center', alignItems : 'center', marginTop : 25 }} >
				 		<Image source={{uri : this.state.url}} style={{width : this.state.size, height : this.state.size }} /> 	
					</View>)
		}
	}
}

export default GiveMeRandomPic