import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import HeaderZ from '../components/HeaderZ.js'

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
        <ScrollView style={{ height : '100%' , marginTop : 60 }} >
			<GiveMeTwitter data={this.props.data.twitter} />
			<GiveMeList data={this.props.data.kult[0]}  />
			<GiveMeList data={this.props.data.kult[1]}  />
			<GiveMeText data={this.props.data.citation} />
			<GiveMeList data={this.props.data.series} title={"Series Populaires"} />
			<GiveMeList data={this.props.data.films} title={"Films Populaires"} />
			<GiveMeMozaic data={this.props.data.cinema} title={'Sortie Cinema 2 la Semaine'} />
			<GiveMeMozaic data={this.props.data.futurCinemaIMG} title={'Films attendu par allocine'} />
			<GiveMeText data={this.props.data.meurice} />
        </ScrollView>
        )
			// <GiveMeMozaic data={this.props.data.filmsIMG} title={'Top des films allocine'} />
			// <GiveMeMozaic data={this.props.data.seriesIMG} title={'top des series allocine'} />
			// <GiveMeAffiche data={this.props.data.cinema} title={'topFilm'} />
 }
}

export default ActuScreen;