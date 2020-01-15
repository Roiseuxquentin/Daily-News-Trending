import React, {Component} from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import { Dimensions, ScrollView, View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import HeaderZ from './HeaderZ.js'
import down from './../ressources/images/down.png';
import up from './../ressources/images/up.png';

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

// TWITTER COLOR
//		#00acee

class GiveMeTwitter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display : 'none' ,
	  		twitter : ['paris,monde,states','paris,monde,states','paris,monde,states']
		 }

	}
	componentDidMount() {
		if (this.props.data) {
			this.setState({twitter : this.props.data})
		}
	}
	giveMeTweet(tweets) {
		return tweets.map((elt,index) =>  <Text key={index} 
												style={{ color : '#00acee' ,textAlign : 'center', fontSize : 18  }} >{elt} </Text> )
	}

	displayMode(mode) {
		if (mode == 'none')
			return 'flex'
		else 
			return 'none'
	}

	render() {

		return (
			<View style={{backgroundColor : 'white'}}>  
				
				<TouchableWithoutFeedback onPress={() => {
					if (this.state.display == 'none')
						this.setState({display : 'flex' })
					else 
						this.setState({display : 'none' })
				}} >
			        <View>
						<HeaderZ page="twitter" />
						    <LinearGradient colors={[ 'transparent' , 'rgba(29, 202, 255, 0.05)', 'white' ]}
					          				style={{ display : this.displayMode(this.state.display),
					          						 marginTop : 10,
					          						 padding: 15,
					          						 alignItems: 'center',
					          						 borderRadius: 5 }}>
								{this.giveMeTweet(this.state.twitter.slice(3,6))}
						    <View style={{flex : 1, justifyContent : 'center' , alignItems : 'center', marginTop : 10 }} >
						    	<Text style={{ color : '#00acee', fontSize : 32, display : (this.state.display == 'none' ) ? 'flex' : 'none' }} >...</Text>
	            				<Image source={(this.state.display == 'none' ) ? down : up } style={{marginTop : 5, width : 20 , height : 20 }} />
						    </View>
						    </LinearGradient>
			        </View>

				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => this.setState({display : 'none'}) } >
					<LinearGradient colors={['transparent' , 'rgba(29, 202, 255, 0.5)' , 'transparent', ]}
					          style={{ padding: 15, alignItems: 'center', borderRadius: 5,  display : this.state.display }}>
					    	{this.giveMeTweet(this.state.twitter)}
					</LinearGradient>
				</TouchableWithoutFeedback>
			
			</View> 
		)
	}
}

export default GiveMeTwitter