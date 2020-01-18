import React, {Component} from 'react';

import { View, Text, Image , Modal, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
						<LinearGradient colors={[ '#959595', 'transparent', '#959595' ]} style={{width : 360 ,height : 705,  }}>
							   		<Text style={{  padding : 10,
							   						margin : 10,
							   						textAlign : 'center',
						   							fontSize : 24,
							   		 				marginTop : 270 }} >
			   							{this.props.data.}
			   						</Text>
						</LinearGradient>
		              </TouchableWithoutFeedback>
		        </Modal>

		       <TouchableWithoutFeedback onPress={() => this.setModalVisible(true ) } >
			   		<LinearGradient colors={[ 'white' , 'rgba(29, 202, 255, 0.1)', 'transparent'  ]}
			          				style={{ padding: 20,
			          						 alignItems: 'center',
			          						 borderRadius: 5 }}>

   							<View style={{borderColor : 'rgba(174, 182, 191, 1)' ,
											borderRadius : 5,
											borderBottomWidth : 2}} >
				   		<Text style={{textAlign : 'center', fontSize : 18, fontStyle : 'italic' }} >
					   		<Text style={{ fontSize : 50, fontWeight : '800' }} >"</Text>
					   		{this.props.title}
					   		<Text style={{ fontSize : 50, fontWeight : '800' }} >"</Text>
				   		</Text>
							</View>
				    </LinearGradient>    
		        </TouchableWithoutFeedback>

		   	</View>
		)
	}
}

export default GiveMeTextModal