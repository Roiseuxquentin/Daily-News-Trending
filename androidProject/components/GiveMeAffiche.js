import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

import { SliderBox } from "react-native-image-slider-box";


class GiveMeAffiche extends Component {
	constructor(props) {
		super(props)
	}

 render() {
   return (
   	<View style={{ flex : 1, justifyContent : 'center', alignItems : 'center'}} >
   		<Text> {this.props.title}</Text>
		<SliderBox sliderBoxHeight={300} parentWidth={220} images={this.props.data} />
   	</View>
   	)
 }
}

export default GiveMeAffiche;