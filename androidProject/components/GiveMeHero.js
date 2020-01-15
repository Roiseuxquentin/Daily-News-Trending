import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

class GiveMeHero extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  data : null,
  		}
	}

 render() {
   return (
   	<View>
   		<Text> Ping ! </Text>
   	</View>
   	)
 }
}

export default GiveMeHero;