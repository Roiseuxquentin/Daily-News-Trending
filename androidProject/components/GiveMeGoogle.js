import React, {Component} from 'react'
import FadeInGoogle from './FadeInGoogle.js'
import { LinearGradient } from 'expo-linear-gradient';

import HeaderZ from './HeaderZ.js'
import GiveMeTextList from './GiveMeTextList.js'

import searchImg from '../ressources/images/searchBar.png'
import searchBodyImg from '../ressources/images/searchBody.png'

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

import { TouchableHighlight, ScrollView, View, Text, Image } from 'react-native'

class GiveMeGoogle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display : 'none',
	  		WorldWordSearch : [[['recherche'],['recherche002'],['recherche003']],[['recherche004'],['recherche005'],['recherche006']]]
		 }

	}
	componentDidMount() {
		this.setState({WorldWordSearch : this.props.data.gooSearch})
	}

	giveMeTrends(data) {
		return data.map((trend, index ) => {

		    return ( <View key={index * Math.random() } >
			   			{ this.list(trend) }
				    </View> )
		})
	}

	list(recherches) {
		return recherches.map((elt,index) => {
			if (index)
			 return (
			 	<TouchableHighlight onPress={() => {
					if (this.state.display == 'none')
						this.setState({display : 'flex', buttonVisibility : 'none' })
					else 
						this.setState({display : 'none', buttonVisibility : 'flex' }) 
				}} >
			 		<View key={index} style={{flex: 1, flexDirection: 'row' , marginTop : 15 }}  >
	            		<Image  source={searchBodyImg} style={{width: '100%', height: 50, resizeMode: 'stretch' , position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} />
			 			<Text style={{marginLeft : 15}} >🔎 </Text>
			 			<FadeInGoogle recherche={elt} nb={index} />
		 			</View>
			 	</TouchableHighlight>

		 			)
			else 
			 return (
			 	<View key={30 * Math.random()}  >
	            	<Image  source={searchImg} style={{width: '100%', height: 50, resizeMode: 'stretch' , position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} />
				 	<Text key={index + 1000 } style={{ marginTop: 12, textAlign: 'center', alignSelf: 'stretch' }} >{elt}</Text>
			 	</View>)
		})
	}

	displayMode(mode) {
		if (mode == 'none')
			return 'flex'
		else 
			return 'none'
	}


	render() {

		return ( 
			<View style={{marginBottom : 10}} > 
				
				<TouchableHighlight onPress={() => {
					if (this.state.display == 'none')
						this.setState({display : 'flex', buttonVisibility : 'none' })
					else 
						this.setState({display : 'none', buttonVisibility : 'flex' }) 
				}} >
					<View> 
						<HeaderZ page="google" />
					    <LinearGradient colors={[ 'white' , 'transparent'  ]}
				          				style={{ display : this.displayMode(this.state.display),
				          						 marginTop : 10,
				          						 padding: 15,
				          						 alignItems: 'center',
				          						 borderRadius: 5 }}>
	  						 <Text>
	  						 {this.props.data.gooSearch[0][1]}
	  						 </Text>
	  						 <Text>
	  						 {this.props.data.gooSearch[1][2]}
	  						 </Text>
	  						 <Text>
	  						 {this.props.data.gooSearch[4][3]}
			          						 </Text>
		            		<Image source={(this.state.display == 'none' ) ? down : up } style={{marginTop : 5, width : 20 , height : 20 }} />

					    </LinearGradient>
					</View> 
				</TouchableHighlight>
			    
			    <ScrollView style={{display : this.state.display}} >
			    	{this.giveMeTrends(this.state.WorldWordSearch)}
			    </ScrollView>
				
		    </View>
		)
	}
}

export default GiveMeGoogle