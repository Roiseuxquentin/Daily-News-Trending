import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import HeaderZ from '../components/HeaderZ.js'

import GiveMeMozaic from '../components/GiveMeMozaic.js'
import GiveMeAffiche from '../components/GiveMeAffiche.js'
import GiveMeList from '../components/GiveMeList.js'
import GiveMeText from '../components/GiveMeText.js'
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

class Grown extends Component {
	constructor(props) {
		super(props)
	}

	render() {
      return (
	        <ScrollView style={{ height : '91%' , marginTop : 54 , backgroundColor : 'rgba(29, 202, 255, 0.05)' }} >

				<GiveMeList data={this.props.data.cnrs} title={this.props.data.cnrs[0]} />
				<GiveMeRandomPic data={"diod"} max={23} />
				<GiveMeText data={this.props.data.citation} ox />
				<GiveMeRandomPic data={"diod"} max={23} mini />
				<GiveMeList title={"Science"} data={this.props.data.science} open />
				<GiveMeList title={"Tech"} data={this.props.data.tech} open />
				<GiveMeRandomPic data={"detective"} max={29} mini />
				<GiveMeText data="..." />
			
	        </ScrollView> )
	}
}

export default Grown