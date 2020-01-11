import React, {Component} from 'react';
import { ScrollView } from 'react-native';

import HeaderZ from '../components/HeaderZ.js'

import GiveMeMoneyStack from '../components/GiveMeMoneyStack.js'
import GiveMeNewsPapers from '../components/GiveMeNewsPapers.js'
import GiveMeGoogle from '../components/GiveMeGoogle.js'
import GiveMeSante from '../components/GiveMeSante.js'
import GiveMeActu from '../components/GiveMeActu.js'
import GiveMePicture from '../components/GiveMePicture.js'
import GiveMeRandomPic from '../components/GiveMeRandomPic.js'

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

class ActuScreen extends Component {
	constructor(props) {
		super(props)
	}

 render() {
      return (
        <ScrollView style={{ height : '90%' , marginTop : 60, backgroundColor : 'rgba(29, 202, 255, 0.05)' }} >
          <HeaderZ />

          <GiveMeMoneyStack data={this.props.data} />
          <GiveMeNewsPapers />            

          <GiveMeRandomPic data={"news"} max={35} />
          
          <GiveMeSante data={this.props.data} /> 

          <GiveMePicture data={this.props.data} />

          <GiveMeActu data={this.props.data} />           
          
          <GiveMeRandomPic data={"news"} max={35} />
          <GiveMeGoogle data={this.props.data} />
          <GiveMeRandomPic data={"detect"} max={24} mini />
        
        </ScrollView>
        )
 }
}

export default ActuScreen;