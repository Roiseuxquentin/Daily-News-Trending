import React, {Component} from 'react';
import { ScrollView } from 'react-native';


import GiveMeMoneyStack from '../components/GiveMeMoneyStack.js'
import GiveMeNewsPapers from '../components/GiveMeNewsPapers.js'
import GiveMeGoogle from '../components/GiveMeGoogle.js'
import GiveMeList from '../components/GiveMeList.js'
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
        <ScrollView style={{ height : '91%' , marginTop : 60, backgroundColor : 'rgba(242, 243, 244, 0.5)' }} >

          <GiveMeMoneyStack data={this.props.data} />
          <GiveMeNewsPapers />            

          <GiveMeRandomPic data={"news"} max={35} />
          <GiveMeGoogle data={this.props.data} />
          
          <GiveMeList title={"La Une"} data={this.props.data.une} />
          
          <GiveMePicture data={this.props.data} />

          <GiveMeSante data={this.props.data} /> 

          <GiveMeRandomPic data={"news"} max={35} />

          <GiveMeActu data={this.props.data} />           
          <GiveMeRandomPic data={"detect"} max={24} mini />
          
        
        </ScrollView>
        )
 }
}

export default ActuScreen;