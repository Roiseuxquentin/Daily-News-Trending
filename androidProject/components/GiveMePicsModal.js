import React, {Component} from 'react';
import { View, Image , Modal, TouchableHighlight} from 'react-native';

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

class GiveMeMozaic extends Component {
	constructor(props) {
		super(props)
		  this.state = {
		    modalVisible: false,
		    currentImg : 'https://files.offi.fr/evenement/77097/images/120/2b0fd73eafcefa194c917b9821df4584.jpg',
		  }
	}


	render() {
		return (
		   	<View >
		        <Modal
		          animationType="slide"
		          transparent={true}
		          visible={this.state.modalVisible}
		          onRequestClose={() => { 
		          		console.log('%c DebuGg : ', 'background: orange; color: red'  )
		          }}>
		          <View style={{position : 'absolute', top : 250 , left : 115 }}>

		              <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible) }>
					   		<Image source={{uri : this.state.currentImg }}  style={{width : 150 , height : 200}} />
		              </TouchableHighlight>
		          </View>
		        </Modal>

		       <TouchableHighlight key={(index + (Math.random() * 10000)) }
		       					   onPress={(e) => this.setModalVisible(true, pics) }>
					<Image  key={index} resizeMode={'contain'} source={{uri : pics}} 
								style={{flex : 1, margin : 3 , width : 42 , height : 42}} />
		        </TouchableHighlight>

		   	</View>
		)
	}

  setModalVisible(visible, pic) {
    this.setState({modalVisible: visible, currentImg : pic });
  }

   return (
   	)
 }
}

export default GiveMeMozaic