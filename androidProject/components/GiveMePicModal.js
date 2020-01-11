import React, {Component} from 'react';
import { View, Text, Image , Modal, TouchableWithoutFeedback} from 'react-native';

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

class GiveMePicModal extends Component {
	constructor(props) {
		super(props)
		  this.state = {
		    modalVisible: false,
		  }
	}

	setModalVisible(visible, pic) {
		this.setState({modalVisible: visible });
	}

	render() {
		return (
		   	<View >
		        <Modal
		          animationType="slide"
		          transparent={true}
		          visible={this.state.modalVisible}>
	              <TouchableWithoutFeedback onPress={() => this.setModalVisible(!this.state.modalVisible) }>
		       		   <View style={{ width : 400 ,
				          				height : 750,
				          				borderColor : 'pink',
				          				borderWidth : 2 ,
				          				backgroundColor : 'rgba(29, 202, 255, 0.6)' }} >
					   		<Image source={{uri : this.props.data }}  style={{width : 150 , height : 200,position : 'absolute', top : 250 , left : 115 ,}} />
		        	  </View>
	              </TouchableWithoutFeedback>
		        </Modal>

		       <TouchableWithoutFeedback onPress={() => this.setModalVisible(true ) }>
					<Image source={{uri : this.props.data}} 
								style={{flex : 1, margin : 2 , width : 65 , height : 65}} />
		        </TouchableWithoutFeedback>

		   	</View>
		)
	}


}

export default GiveMePicModal