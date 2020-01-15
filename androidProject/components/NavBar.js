import React from 'react'
import { View, Image, TouchableNativeFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderZ from '../components/HeaderZ.js'

import GiveMeAudio from './GiveMeAudio.js'
import dbzCloud from './../ressources/images/dbzCloud.png';

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

const NavBar = (props) => {
	if (props.visible && (props.visible !== 'home')) {
		return (
				<View style={{ position : 'absolute',
								flex : 1,
								flexDirection : 'row',
								top:  0,
								left: 0,
								right: 0,
								borderBottomColor: (props.visible === 'actu') ? 'rgba(174, 182, 191, 1)'   : 'rgba(29, 202, 255, 1)',
								borderBottomRadius : 10,
								borderBottomWidth: 1.5,
								backgroundColor : (props.visible === 'actu') ? 'rgba(242, 243, 244, 0.5)'  : 'rgba(29, 202, 255, 0.05)' }} >

				    <View style={{margin : 5 , flex : 1}} >
						<TouchableNativeFeedback onPress={() => props.home() } > 
							<Image source={dbzCloud} style={{ height : 42, width : 42  }} />
						</TouchableNativeFeedback>
				    </View>
					
					<View style={{marginTop : 12}} >
			        	<HeaderZ />
				    </View>

				    <View style={{flex : 1}} >
						<GiveMeAudio audio={props.audio} />
				    </View>

				</View>
				)
	} else {
		return (<View>
				    
				</View>)
		}
}

export default NavBar