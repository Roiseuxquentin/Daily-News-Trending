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
		          <View style={{position : 'absolute', top : 250 , left : 115 }}>
		              <TouchableWithoutFeedback onPress={() => this.setModalVisible(!this.state.modalVisible) }>
					   		<Image source={{uri : this.props.data }}  style={{width : 150 , height : 200}} />
		              </TouchableWithoutFeedback>
		          </View>
		        </Modal>

		       <TouchableWithoutFeedback onPress={() => this.setModalVisible(true ) }>
					<Image source={{uri : this.props.data}} 
								style={{flex : 1, margin : 3 , width : 42 , height : 42}} />
		        </TouchableWithoutFeedback>

		   	</View>
		)
	}


}

export default GiveMePicModal