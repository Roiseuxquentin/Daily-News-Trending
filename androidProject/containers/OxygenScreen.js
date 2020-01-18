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

				<GiveMeTwitter data={this.props.data.twitter} />
	        	<GiveMeTextModal title={"string"} data={"string"}  />
				<GiveMeRandomPic data={"minion"} max={29} mini />
				<GiveMeText data={this.props.data.citation} ox />
				<GiveMeList data={this.props.data.ministereKult} title={"Ministere de la Culture"} open={(new Date().getDay() == 1) ? true : false  } />
				<GiveMeMozaic title={'🎥 Dans les salles 🎥'} data={this.props.data.cinema} open={(new Date().getDay() == 3) ? true : false  } />
				<GiveMeList title={"🎞️ Films a venir 🎞️"} img={this.props.data.futurCinemaIMG} data={this.props.data.futurCinema} open={(new Date().getDay() == 6) ? true : false } />
				<GiveMeList title={"🎭 World'Art 🎨"} data={this.props.data.mondeArt} />
				<GiveMeRandomPic data={"minion"} max={29} />
				<GiveMeText data="LA C LA PLACE DU FRUIT" />
          		
          		<GiveMeTextList data={this.props.data.science} emoji='🛸' />

				<GiveMeList title={"Paris ⁉️"} data={this.props.data.sorties} open={(new Date().getDay() == 5) ? true : false  } />
				<GiveMeText data="LA C LA PLACE DU LEGUME" />
				<GiveMeList title={"Classement Series"} img={this.props.data.seriesIMG} data={this.props.data.series} />
				<GiveMeList title={"Classement Films"} img={this.props.data.filmsIMG} data={this.props.data.films} />
				<GiveMeText data="Classement Music" />
				<GiveMeText data="..." />
			
	        </ScrollView> )
	}
}

export default OxygenScreen