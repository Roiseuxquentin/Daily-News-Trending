import React, {Component} from 'react';
import { View, Text, Image , Modal} from 'react-native';

import GiveMePicModal from './GiveMePicModal.js'

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
		    modalVisible: false,
		    currentImg : 'https://files.offi.fr/evenement/77097/images/120/2b0fd73eafcefa194c917b9821df4584.jpg',
		  }
	}

	row(pics) {
		let sizeOfRow = [0,7,14]

		return sizeOfRow.map((elt , index) => {
			if ( !!pics[elt]) {
				return (<View key={index + Math.random() * 10 } style={{flexDirection: 'row', height: 75, justifyContent : 'center' }} >
					   		{this.displayPics(pics.slice(elt,(elt + 7)))}
					   	</View>)
			}
		})
	}

	displayPics(pics) {
		return pics.map((pic, index) => {
			return ( <GiveMePicModal key={index} data={pic} /> )
		})
	}



	  setModalVisible(visible, pic) {
	    this.setState({modalVisible: visible, currentImg : pic });
	  }

	 render() {
	   return (
		   	<View style={{flex : 1 , flexDirection : 'column', justifyContent: 'center' , width : '100%'}} >
	   			<Text style={{textAlign : 'center'}} > {this.props.title} </Text>
		   		{this.row(this.props.data)}
		   	</View>
	   	)
	 }
}

export default GiveMeMozaic