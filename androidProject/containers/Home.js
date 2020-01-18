import React, {Component} from 'react'
import { View, Dimensions, StyleSheet, Image, TouchableNativeFeedback, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Video } from 'expo-av'

import Loader from '../components/loader.js'
import GiveMeAudioList from '../components/GiveMeAudioList.js'

import capsuleCorp from '../ressources/images/capsuleCorp.png'
import TwitterHome from '../ressources/images/TwitterHome.png'
import GoogleHome from '../ressources/images/GoogleHome.png'

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
			status : true,
			// moment : require('../ressources/images/kamehouseSOIREE.jpg') ,
			grec : { source : 'eterdam' , 
					racine : 'advitam' ,
					traduction : 'eternel' } ,
		}
	}
	  
	componentDidMount() {

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
										color : 'red',
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
										fontSize : 24, 
										textAlign : 'center'
									},
									GoogleHome : {
										margin : 25,
										marginTop : 0,
										width : 90,
										height : 90,
									},
									TwitterHome :{
										margin : 25,
										marginTop : 0,
										width : 90,
										height : 90,
									}
						});

		            
		if (this.state.status) {
			return (
				<View style={{grid: 1, gridDirection: 'column' ,marginTop : 2 , alignItems: 'center'}} >
				        
					<LinearGradient colors={[ 'white', '#5898dd','#5898dd','transparent'  ]} style={{ height : 850, width : 360, position : 'absolute'}} />

					<View style={{position : 'absolute', zIndex : 0,top : 200, flex : 1, flexDirection : 'row'}} >

						<TouchableNativeFeedback onPress={() => { setTimeout(() => this.setState({status : false }), 100)
																  setTimeout(() => this.props.actu() , 200 ) } } > 
							<Image source={GoogleHome} style={styles.GoogleHome} />
						</TouchableNativeFeedback>

						<TouchableNativeFeedback onPress={() =>  {
															setTimeout(() => this.setState({status : false }), 100)
															setTimeout(() => this.props.oxygen() , 200 ) }  } > 
							<Image source={TwitterHome} style={styles.TwitterHome} />
						</TouchableNativeFeedback>
						
					</View>

					<View style={{flex : 1,  top : 280, left : 50}} >
						<GiveMeAudioList audio={this.props.audio} />
				    </View>

					<View style={{flex:1, justifyContent : 'center', textAlign : 'center', alignItems : 'center', top : 550}} >
						<Text style={{ borderColor : 'white', borderTopWidth : 2 , borderBottomWidth : 2 ,position : 'absolute', zIndex : 10 , bottom : 118 }}>
							<Text style={styles.source}> {this.state.grec.source}</Text>
							<Text style={styles.grecText} >{this.state.grec.racine}</Text>
							<Text style={styles.text} >{(this.state.grec.traduction.length > 13 ) ?  `\n${this.state.grec.traduction}` : this.state.grec.traduction }</Text>
						</Text>
						<Video
			              source={require('./../ressources/video/backgroundVideo.mp4')}
			              isLooping
			              resizeMode={Video.RESIZE_MODE_CONTAIN}
			              shouldPlay
			              style={{ width: 552, height: 550, top : 0 , opacity : 1, left : 0,}}
			            /> 
					</View>
					
				</View>
			)
		} else {
			return <Loader />
		}
	}
}

export default Home