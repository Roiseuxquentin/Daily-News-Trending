import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import HeaderZ from '../components/HeaderZ.js'

import GiveMeTextModal from '../components/GiveMeTextModal.js'
import GiveMeTwitter from '../components/GiveMeTwitter.js'
import GiveMeMozaic from '../components/GiveMeMozaic.js'
import GiveMeAffiche from '../components/GiveMeAffiche.js'
import GiveMeList from '../components/GiveMeList.js'
import GiveMeTextList from '../components/GiveMeTextList.js'
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

class OxygenScreen extends Component {
	constructor(props) {
		super(props)
	}

	render() {
      return (
	        <ScrollView style={{ height : '91%' , marginTop : 54 , backgroundColor : 'rgba(29, 202, 255, 0.05)' }} >

				<GiveMeTwitter data={this.props.state.data.twitter} />
	        	<GiveMeTextModal title={this.props.state.mot.mot} data={this.props.state.mot.definition}  />
				<GiveMeRandomPic data={"minion"} max={29} mini />
				<GiveMeText data={this.props.state.data.citation} ox />
				<GiveMeMozaic title={`🎥 \n Dans les salles`} data={this.props.state.data.cinema} open={(new Date().getDay() == 3) ? true : false  } />
				<GiveMeList title={"Ministere de la Culture"} data={this.props.state.data.ministereKult}  open={(new Date().getDay() == 1) ? true : false  } />
				<GiveMeList title={"🎞️ Films a venir 🎞️"} img={this.props.state.data.futurCinemaIMG} data={this.props.state.data.futurCinema} open={(new Date().getDay() == 6) ? true : false } />
				<GiveMeList title={"🎭🎨 \n World'Art"} data={this.props.state.data.mondeArt} />
				<GiveMeRandomPic data={"minion"} max={29} />
				<GiveMeText data="LA C LA PLACE DU FRUIT" />
          		
          		<GiveMeTextList data={this.props.state.data.science} emoji='🛸' />

				<GiveMeText data="LA C LA PLACE DU LEGUME" />
	        	<GiveMeText data={`${this.props.state.citation.citation} \n "${this.props.state.citation.ref}"`}  />
				<GiveMeList title={"Paris ⁉️"} data={this.props.state.data.sorties} open={(new Date().getDay() == 5) ? true : false  } />
				<GiveMeList title={"Classement Series"} img={this.props.state.data.seriesIMG} data={this.props.state.data.series} />
				<GiveMeList title={"Classement Films"} img={this.props.state.data.filmsIMG} data={this.props.state.data.films} />
				<GiveMeText data="_________________" />
				<GiveMeText data="Classement Music" />
			
	        </ScrollView> )
	}
}

export default OxygenScreen