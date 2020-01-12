import React, {Component} from 'react';

import { View, Text, Image, TouchableWithoutFeedback, FlatList} from 'react-native';

import GiveMePicModal from './GiveMePicModal.js'

import down from './../ressources/images/down.png'
import up from './../ressources/images/up.png'

// NEED FOLDER AND TITLE KLIK
// UNFOLDER LE MERCREDI

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2020|| #
// #.\=============================================/.#
// ###################################################

class GiveMeMozaic extends Component {
	constructor(props) {
		super(props)
		  this.state = {
		  	data : ['https://files.offi.fr/evenement/77097/images/120/2b0fd73eafcefa194c917b9821df4584.jpg'],
		    modalVisible: false,
		    currentImg : 'https://files.offi.fr/evenement/77097/images/120/2b0fd73eafcefa194c917b9821df4584.jpg',
		    display : 'none'
		  }
	}

	componentDidMount() {
		if (this.props.open) {
			this.setState({display : 'flex'})
		}

		const DATA = this.props.data.map((elt) => {
			      return { id: (Math.random * 100), src: elt };
			    });
		this.setState({data : DATA})
	}

	  setModalVisible(visible, pic) {
	    this.setState({modalVisible: visible, currentImg : pic });
	  }

	 render() {
	   return (
		   	<View style={{flex : 1 , flexDirection : 'column', justifyContent: 'center' , width : '100%', marginTop : 20}} >

				<TouchableWithoutFeedback onPress={() => {
								if (this.state.display == 'none')
									this.setState({display : 'flex' })
								else 
									this.setState({display : 'none' }) }} >
	   				<Text style={{textAlign : 'center', fontSize : 24, textDecorationLine : 'underline'}} > 
		   				{this.props.title} 
						<View style={{width : 10 , height : 1}} />
	            		<Image source={(this.state.display == 'none' ) ? down : up } style={{width : 20 , height : 20 }} />
	   				</Text>
		        </TouchableWithoutFeedback>

	
					<View style={{display : this.state.display}}>
			   			<FlatList data={this.state.data}
						      numColumns={5}
				    		  keyExtractor={(item, index) => (index + Math.random()).toString()} 
						      renderItem={({item, index}) => {
						      			return ( <GiveMePicModal key={index} data={item.src}  />  ) 
						      		} } />
					</View>
		   	

		   	</View>
	   	)
	 }
}

export default GiveMeMozaic