import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

import KHmating from '../ressources/images/kamehouseMATIN.jpg';
import cloudIMG from '../ressources/images/dbzCloud.png';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data : null,
		}
	}

	render() {
		return (
			<View style={{grid: 1}} >
				<View style={{flex: 1, flexDirection : 'row', justifyContent : 'center' }} >
					<TouchableNativeFeedback onPress={() => console.log('ok') } > 
						<Image source={KHmating} 
						style={{ height : 250, width : 200, marginTop : 5  }} />
					</TouchableNativeFeedback> 
				</View>

				<View style={{flex: 1, flexDirection : 'row', justifyContent : 'center' }} >
					<TouchableNativeFeedback onPress={() => console.log('ok') } > 
						<Image source={cloudIMG} 
						style={{ height : 60, width : 60, marginTop : 5  }} />
					</TouchableNativeFeedback> 

					<TouchableNativeFeedback onPress={() => console.log('ok') } > 
						<Image source={cloudIMG} 
						style={{ height : 60, width : 60, marginTop : 5  }} />
					</TouchableNativeFeedback> 
				</View>
			</View>
		)
	}
}

export default Home;