import React, {Component} from 'react';
import { View, Text, Image , Modal, TouchableWithoutFeedback} from 'react-native';

/*==========================================='\ 
||                      .__                  || 
||   ____   ____   ____ |  |   ____   ____   || 
|| _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || 
|| \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || 
||  \___  >\___  >___  /|____/\____/ \____/  || 
||      \/     \/_____/                  2020|| 
\.===========================================*/

class GiveMeTextModal extends Component {
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
		          visible={this.state.modalVisible} >
		              <TouchableWithoutFeedback onPress={() => this.setModalVisible(!this.state.modalVisible) }>
				          <View style={{width : 360 ,
				          				height : 705,
				          				backgroundColor : 'rgba( 29, 202, 255, 0.6)'  }}>

							   		<Text style={{backgroundColor : 'white' ,
							   						padding : 10,
							   						margin : 10,
							   						textAlign : 'center',
						   							fontSize : 24,
							   		 				marginTop : 270 }} >
			   							{this.props.data}
			   						</Text>
				          
				          </View>
		              </TouchableWithoutFeedback>
		        </Modal>

		       <TouchableWithoutFeedback onPress={() => this.setModalVisible(true ) }>
					   		<Text style={{textAlign : 'center', fontSize : 24,  fontStyle : 'italic' }} >
						   		<Text style={{ fontSize : 50, fontWeight : '800' }} >"</Text>
						   		{this.props.title}
						   		<Text style={{ fontSize : 50, fontWeight : '800' }} >"</Text>
					   		</Text>
		        </TouchableWithoutFeedback>

		   	</View>
		)
	}


}

export default GiveMeTextModal