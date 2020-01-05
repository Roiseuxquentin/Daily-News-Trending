import React, {Component} from 'react'

import { Dimensions, ScrollView, View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import HeaderZ from './HeaderZ.js'

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
	  		twitter : ['paris,monde,states']
		 }

	}
	componentDidMount() {
		if (this.props.data) {
			this.setState({twitter : this.props.data})
		}
	}
	giveMeTweet(tweets) {
		return tweets.map((elt,index) =>  <Text key={index} style={{color : 'white' ,textAlign : 'center', fontSize : 18  }} >{elt} </Text> )
	}


	render() {

		return (
			<View> 
				
				<TouchableWithoutFeedback onPress={() => {
					if (this.state.display == 'none')
						this.setState({display : 'flex' })
					else 
						this.setState({display : 'none' })
				}} >
					<HeaderZ page="twitter" />
				</TouchableWithoutFeedback>

			    <ScrollView  style={{backgroundColor : '#00acee', marginTop : 2 , display : this.state.display   }}>
			    	{this.giveMeTweet(this.state.twitter)}
			    </ScrollView>
			
			</View> 
		)
	}
}

export default GiveMeTwitter