import React, {Component} from 'react';
import { ScrollView } from 'react-native';


import GiveMeMoneyStack from '../components/GiveMeMoneyStack.js'
import GiveMeNewsPapers from '../components/GiveMeNewsPapers.js'
import GiveMeGoogle from '../components/GiveMeGoogle.js'
import GiveMeList from '../components/GiveMeList.js'
import GiveMeTextList from '../components/GiveMeTextList.js'
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

          // <LinearGradient colors={[ 'white' , 'rgba(29, 202, 255, 0.1)', 'transparent' style={{white}} ]} />
 render() {
      return (
        <ScrollView style={{ height : '91%' , marginTop : 54, backgroundColor : 'rgba(242, 243, 244, 0.5)' }} >
          
          <GiveMeList color={false} title={"A La Une"} data={this.props.data.une} />

          <GiveMeMoneyStack data={this.props.data} />
          
          <GiveMeNewsPapers />            


          
          <GiveMeGoogle data={this.props.data} />
          
          <GiveMePicture data={this.props.data} />
          <GiveMeRandomPic data={"detect"} max={24} />

          
          <GiveMeTextList color={false} data={this.props.data.cnrs} emoji='📜' />
          <GiveMeSante data={this.props.data} /> 
          <GiveMeTextList color={false} data={this.props.data.gouv.slice(0,3)} emoji='🇫🇷' />

          <GiveMeRandomPic data={"news"} max={35} mini />
          <GiveMeActu data={this.props.data} />           
        
        </ScrollView>
        )
 }
}

export default ActuScreen;