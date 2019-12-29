import React from 'react'
import { View, Image, TouchableNativeFeedback } from 'react-native';

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

	return (<View style={{ position: 'absolute',
							flex : 1,
							flexDirection : 'row',
							top:  0,
							left: 0,
							right: 0,
							paddingBottom: 20,
							background : 'none',
							paddingBottom : 30,
							justifyContent: 'center',
				    		alignItems: 'center',
					    }} >

				<TouchableNativeFeedback onPress={() => props.home() } > 
					<Image source={dbzCloud} style={{ height : 60, width : 60, marginTop : 1  }} />
				</TouchableNativeFeedback> 

				<GiveMeAudio audio={props.audio} />
			</View>)
}

export default NavBar