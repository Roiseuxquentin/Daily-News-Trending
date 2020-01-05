import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import HeaderZ from '../components/HeaderZ.js'

import GiveMeTextModal from '../components/GiveMeTextModal.js'
import GiveMeTwitter from '../components/GiveMeTwitter.js'
import GiveMeMozaic from '../components/GiveMeMozaic.js'
import GiveMeAffiche from '../components/GiveMeAffiche.js'
import GiveMeList from '../components/GiveMeList.js'
import GiveMeText from '../components/GiveMeText.js'

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
	        <ScrollView style={{ height : '100%' , marginTop : 60 , marginBottom : 60}} >

				<GiveMeTwitter data={this.props.data.twitter} />

	        	<GiveMeTextModal title={'SOURIRE'} data={'JUSTE SOUS LE RIRE , DANS LA MESURE'}  />
				<GiveMeText data={this.props.data.citation} />

				<GiveMeMozaic  title={'Au Cine cette semaine'} data={this.props.data.cinema} open={(new Date().getDay() == 3) ? true : false  } />
				<GiveMeList title={"Les Films a venir"} img={this.props.data.futurCinemaIMG} data={this.props.data.futurCinema} />
			
				<GiveMeList data={this.props.data.mondeArt} title={"World'Art"} />
			
				<GiveMeList data={this.props.data.ministereKult} title={"Le Ministere 2 Kulture"} open />
			
				<GiveMeList img={this.props.data.seriesIMG} data={this.props.data.series} title={"Les Series Populaires"} />
				<GiveMeList img={this.props.data.filmsIMG} data={this.props.data.films} title={"Les Films Populaires"} />

				<GiveMeList data={this.props.data.sorties} title={"Les Sorties"} />
	        
	        </ScrollView> )
	}
}

export default ActuScreen;