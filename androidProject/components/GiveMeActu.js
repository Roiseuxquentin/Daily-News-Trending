import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

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

class GiveMeActu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  info : ['news'],
  		}
	}

	componentDidMount() {
		this.setState({info : this.props.data.info})
	}

	infoMapped(info) {
		const cleaned = (string) => {
			return string.replace('&#39;',"'")
		}
		
		return info.map((elt,index) => {
			if (index < 6) {
	   			return ( <View key={index} 
	   						style={{  borderRadius :2,
										borderColor : 'black',
			   							shadowColor: "#000",
										shadowOffset: {
										width: 0,
										height: 1,
										},
										shadowOpacity: 0.20,
										shadowRadius: 1.41,
										elevation: 2,
										marginTop : 10,
										marginBottom : 10 }}>
		   				<Text style={{margin : 15 ,fontSize : 18, textAlign : 'center',}} > {cleaned(elt)} </Text>
					</View>)
			}
		})
	}

 render() {
   return (
   	<View style={{marginTop : 10 }} >
   		{this.infoMapped(this.state.info)}
   	</View>
   	)
 }
}

export default GiveMeActu