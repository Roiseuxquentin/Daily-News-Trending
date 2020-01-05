import React, {Component} from 'react';
import { ScrollView } from 'react-native';

import HeaderZ from '../components/HeaderZ.js'

import GiveMeMoneyStack from '../components/GiveMeMoneyStack.js'
import GiveMeNewsPapers from '../components/GiveMeNewsPapers.js'
import GiveMeGoogle from '../components/GiveMeGoogle.js'
import GiveMeSante from '../components/GiveMeSante.js'
import GiveMeActu from '../components/GiveMeActu.js'
import GiveMePicture from '../components/GiveMePicture.js'

class ActuScreen extends Component {
	constructor(props) {
		super(props)
	}

 render() {
   
      return (
        <ScrollView style={{ height : '90%' , marginTop : 60 }} >
          <HeaderZ />
          <GiveMeMoneyStack data={this.props.data} />
          <GiveMeNewsPapers />            
          <GiveMeSante data={this.props.data} />            
          <GiveMePicture data={this.props.data} />           
          <GiveMeActu data={this.props.data} />           
          <GiveMeGoogle data={this.props.data} />
        </ScrollView>
        )
 }
}

export default ActuScreen;