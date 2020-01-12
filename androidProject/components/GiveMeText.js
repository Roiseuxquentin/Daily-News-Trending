import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class GiveMeText extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  data : "",
  		}
	}

 render() {
   return (

	    <LinearGradient colors={[ 'transparent' , 'white', 'transparent'  ]}
          				style={{ marginTop : 10,
          						 padding: 30,
          						 alignItems: 'center',
          						 borderRadius: 5 }}>
	   			<Text style={{textAlign : 'center', padding : 10,
				   			 borderColor : 'rgba(174, 182, 191, 1)' ,
							borderRadius : 5,
							borderBottomWidth : 2,
							borderTopWidth : 2}} >
					 {this.props.data}</Text> 
	    </LinearGradient>    

   	)
 }
}

export default GiveMeText