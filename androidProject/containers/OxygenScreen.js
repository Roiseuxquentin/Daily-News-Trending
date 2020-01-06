import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import HeaderZ from '../components/HeaderZ.js'

import GiveMeTextModal from '../components/GiveMeTextModal.js'
import GiveMeTwitter from '../components/GiveMeTwitter.js'
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

class ActuScreen extends Component {
	constructor(props) {
		super(props)
	}

	render() {
      return (
	        <ScrollView style={{ height : '100%' , marginTop : 60 , marginBottom : 60 ,backgroundColor : 'rgba(29, 202, 255, 0.2)' }} >

				<GiveMeTwitter data={this.props.data.twitter} />

	        	<GiveMeTextModal title={'SOURIRE'} data={'JUSTE SOUS LE RIRE , DANS LA MESURE'}  />
				<GiveMeText data={this.props.data.citation} />
				
				<GiveMeRandomPic data={"minion"} max={29} mini />


				<GiveMeMozaic  title={'Au Cine cette semaine'} data={this.props.data.cinema} open={(new Date().getDay() == 3) ? true : false  } />
				<GiveMeList title={"Les Sorties"} data={this.props.data.sorties} />
			
				<GiveMeRandomPic data={"minion"} max={29} />
			
				<GiveMeList data={this.props.data.ministereKult} title={"Le Ministere 2 Kulture"} open={(new Date().getDay() == 1) ? true : false  } />
				<GiveMeList title={"World'Art"} data={this.props.data.mondeArt} />
			
				<GiveMeRandomPic data={"diod"} max={24} mini />
				<GiveMeList title={"Les Films a venir"} img={this.props.data.futurCinemaIMG} data={this.props.data.futurCinema} />
				<GiveMeList title={"Les Series Populaires"} img={this.props.data.seriesIMG} data={this.props.data.series} />
				<GiveMeList title={"Les Films Populaires"} img={this.props.data.filmsIMG} data={this.props.data.films} />

	        
	        </ScrollView> )
	}
}

export default ActuScreen