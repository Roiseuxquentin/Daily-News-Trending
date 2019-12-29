import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

class GiveMeText extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  data : "",
  		}
	}

 render() {
   return ( <Text style={{textAlign : 'center', margin : 10}} >{this.props.data}</Text> )
 }
}

export default GiveMeText