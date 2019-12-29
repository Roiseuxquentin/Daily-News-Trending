import React, {Component} from 'react'
import FadeInGoogle from './FadeInGoogle.js'

import HeaderZ from './HeaderZ.js'

import searchImg from '../ressources/images/searchBar.png'
import searchBodyImg from '../ressources/images/searchBody.png'
import folderIMG from '../ressources/images/googleFoldIMG.png'
import unfolderIMG from '../ressources/images/googleUnfoldIMG.png'

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
	  		WorldWordSearch : [['recherche'],['recherche002']]
		 }

	}
	componentDidMount() {
		if (this.props.data) {
			this.setState({WorldWordSearch : this.props.data.gooSearch})
		}
	}

	giveMeTrends() {
		return this.state.WorldWordSearch.map((trend, index ) => {

		    return ( <View key={index * Math.random() } >
			   			{ this.list(trend) }
				    </View> )
		})
	}

	list(recherches) {
		return recherches.map((elt,index) => {
			if (index)
			 return (<View key={index} style={{flex: 1, flexDirection: 'row' , marginTop : 15 }}  >
	            		<Image  source={searchBodyImg} style={{width: '100%', height: 50, resizeMode: 'stretch' , position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} />
			 			<Text style={{marginLeft : 15}} >🔎 </Text>
			 			<FadeInGoogle recherche={elt} nb={index} />
		 			</View>)
			else 
			 return (
			 	<View key={30 * Math.random()}  >
	            	<Image  source={searchImg} style={{width: '100%', height: 50, resizeMode: 'stretch' , position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} />
				 	<Text key={index + 1000 } style={{ marginTop: 12, textAlign: 'center', alignSelf: 'stretch' }} >{elt}</Text>
			 	</View>)
		})
	}


	render() {

		return ( 
			<View> 
				
				<TouchableHighlight onPress={() => {
					if (this.state.display == 'none')
						this.setState({display : 'flex', buttonVisibility : 'none' })
					else 
						this.setState({display : 'none', buttonVisibility : 'flex' }) 
				}} >
					<HeaderZ page="google" />
				</TouchableHighlight>
			    
			    <ScrollView style={{display : this.state.display}} >
			    	{this.giveMeTrends()}
			    </ScrollView>
				

				<View style={{marginTop : 5, flex : 1 , justifyContent : 'flex-end', alignItems : 'flex-end' }}>
					<TouchableHighlight onPress={() =>  this.setState({display : 'flex', buttonVisibility : 'none' }) } >
							<Image source={folderIMG} style={{ marginRight : 20, display : this.state.buttonVisibility }} />
					</TouchableHighlight>
			    
				    <TouchableHighlight onPress={() => this.setState({display : 'none', buttonVisibility : 'flex' }) } >
							<Image source={unfolderIMG} style={{ marginRight : 20, display : this.state.display }} />
					</TouchableHighlight>
			    </View>
		    </View>
		)
	}
}

export default GiveMeGoogle