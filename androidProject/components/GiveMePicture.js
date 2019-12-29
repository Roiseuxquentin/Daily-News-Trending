import React, {Component} from 'react'

import Loader from './loader.js'

import { Image, Dimensions } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"

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

class GiveMePicture extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  urls : false,
  		}
	}

	componentDidMount() {
		this.setState({urls : this.props.data.photo })
	}

	render() {
		if (this.state.urls) {
			return ( <SliderBox sliderBoxHeight={300} autoplay={true} circleLoop={true} dotStyle={{display : 'none'}} images={this.state.urls} /> )
		} else {
			return (<Loader />)
		}
	}
}

export default GiveMePicture