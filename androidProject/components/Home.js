import React, {Component} from 'react'
import { View, Image,TouchableNativeFeedback, Text } from 'react-native'

import KHMATIN from '../ressources/images/kamehouseMATIN.jpg'
import KHJOURNEE from '../ressources/images/kamehouseJOURNEE.jpg'
import KHSOIREE from '../ressources/images/kamehouseSOIREE.jpg'

import cloudIMG from '../ressources/images/dbzCloud.png'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			moment : require('../ressources/images/kamehouseSOIREE.jpg') ,
			data : null,
		}
	}

	componentDidMount() {
		const day = new Date()
		const Heure = day.getHours()

		if (( Heure > 10 ) && ( Heure < 18)) {
			this.setState({moment : require('../ressources/images/kamehouseJOURNEE.jpg') })
		} else if ( Heure < 10 )  {
			this.setState({moment : require('../ressources/images/kamehouseMATIN.jpg') })
		} else {
			this.setState({moment : require('../ressources/images/kamehouseSOIREE.jpg') })
		} 
	}

	render() {
		return (
			<View style={{grid: 1, gridDirection: 'column', justifyContent: 'center', alignItems: 'center',marginTop : 2}} >
					<TouchableNativeFeedback onPress={() => console.log('ok') } > 
							<Image source={this.state.moment} style={{ height : 300, width : '98%', }} />
					</TouchableNativeFeedback> 
					<Text>LE GREC</Text>
				<View style={{flex: 1, flexDirection : 'row', justifyContent : 'center' }} >
					<TouchableNativeFeedback onPress={() => console.log('ok') } > 
						<Image source={cloudIMG} style={{ height : 60, width : 60, marginTop : 5  }} />
					</TouchableNativeFeedback> 

					<TouchableNativeFeedback onPress={() => console.log('ok') } > 
						<Image source={cloudIMG} style={{ height : 60, width : 60, marginTop : 5  }} />
					</TouchableNativeFeedback> 
				</View>
			</View>
		)
	}
}

export default Home