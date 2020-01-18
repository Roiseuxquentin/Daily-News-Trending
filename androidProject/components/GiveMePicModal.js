import React, {Component} from 'react';
import { View, Text, Image , Modal, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
		          animationType="fade"
		          transparent={true}
		          visible={this.state.modalVisible}>
	              <TouchableWithoutFeedback onPress={() => this.setModalVisible(!this.state.modalVisible) }>
		       		   <LinearGradient colors={[ 'transparent', 'rgba(29, 202, 255, 1)', 'transparent' ]}
       		   							style={{ width : 360 , height : 705, }} >
					   		<Image source={{uri : this.props.data}}  style={{width : 150 , height : 200,position : 'absolute', top : 250 , left : 115 ,}} />
		        	  </LinearGradient>
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