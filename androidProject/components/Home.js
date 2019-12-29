import React, {Component} from 'react'
import { View, Dimensions, StyleSheet, Image, TouchableNativeFeedback, Text } from 'react-native'
import { Video } from 'expo-av';

import { SliderBox } from "react-native-image-slider-box";

import capsuleCorp from '../ressources/images/capsuleCorp.png'
import codeBar from '../ressources/images/codeBar.png'
import planete from '../ressources/images/planete.png'

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

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// moment : require('../ressources/images/kamehouseSOIREE.jpg') ,
			grec : { source : 'eterdam' , 
					racine : 'advitam' ,
					traduction : 'eternel' } ,
		}
	}

	componentDidMount() {
		// const day = new Date()
		// const Heure = day.getHours()

		// if (( Heure > 10 ) && ( Heure < 18)) {
		// 	this.setState({moment : require('../ressources/images/capsuleCorp.png') })
		// } else if ( Heure < 10 )  {
		// 	this.setState({moment : require('../ressources/images/kamehouseMATIN.jpg') })
		// } else {
		// 	this.setState({moment : require('../ressources/images/kamehouseSOIREE.jpg') })
		// }

		const grec = this.props.grec.split('>>')
		const source = grec[0]
		const racine = grec[1].split('==')
		this.setState({grec : { source : source , 
								racine : racine[0] ,
								traduction : racine[1] } })
	}

	render() {
		const { height } = Dimensions.get("window");
		const styles = StyleSheet.create({
									backgroundVideo: {
										height: height,
										position: "absolute",
										top: 0,
										left: 0,
										alignItems: "stretch",
										bottom: 0,
										right: 0
									},
									grecText : {
										color : 'white',
										marginTop : 5,
									},
									source : {
										marginTop : 20,
										color : 'white',
										fontWeight : '700',
										fontSize : 24
									},
									text : {
										color : 'white',
										fontWeight : '700',
										fontSize : 24
									},
									codeBar : {
										marginRight : 20, 
										marginTop : 15,
										width : 100,
										height : 100,
									},
									planete :{
										marginLeft : 20, 
										width : 100,
										height : 100,
									},
						});
		return (
			<View style={{grid: 1, gridDirection: 'column', justifyContent: 'center', alignItems: 'center',marginTop : 2}} >

                <Video
                  source={require('./../ressources/video/background.mp4')}
                  isLooping
                  resizeMode={Video.RESIZE_MODE_COVER}
                  shouldPlay
                  style={{ position : 'absolute', width: 360, height: 1300 }}
                />					  
			        
				<Image source={capsuleCorp} style={{ height : 450, width : '100%', }} />
				
				<Text style={{ borderColor : 'white', borderTopWidth : 1 , borderBottomWidth : 1 , marginTop : 20 }}>
					<Text style={styles.source}> {this.state.grec.source}</Text>
					<Text style={styles.grecText} >{this.state.grec.racine}</Text>
					<Text style={styles.text} >{this.state.grec.traduction}</Text>
				</Text>

				<View style={{flex : 1, flexDirection : 'row', marginTop : 20 }} >
					<TouchableNativeFeedback onPress={() => this.props.actu() } > 
						<Image source={codeBar} style={styles.codeBar} />
					</TouchableNativeFeedback> 
					<TouchableNativeFeedback onPress={() => this.props.oxygen() } > 
						<Image source={planete} style={styles.planete} />
					</TouchableNativeFeedback> 
				</View>
					

			</View>
		)
	}

}

export default Home