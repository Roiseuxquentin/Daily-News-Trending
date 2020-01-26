import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import config from '../config.json'


class GiveMeFood extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  name : null,
			  img : null,
  		}
	}

	componentDidMount() {
		this.setState({ name : this.props.name, img : this.props.img })
	}

 render() {
   return (
   	<View>
   		<Image src={{ uri : `http://${config.ipData}/ressources/legumes/${this.state.img}` }} style={{width: 150, height: 150,}} />
   		<Text> Ping ! </Text>
   	</View>
   	)
 }
}

export default GiveMeFood;