import React, {Component} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GiveMeTextList from './GiveMeTextList.js'
import GiveMeAffiche from './GiveMeAffiche.js'

import down from './../ressources/images/down.png';
import up from './../ressources/images/up.png';

/*==========================================='\ 
||                      .__                  || 
||   ____   ____   ____ |  |   ____   ____   || 
|| _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || 
|| \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || 
||  \___  >\___  >___  /|____/\____/ \____/  || 
||      \/     \/_____/                  2020|| 
\.===========================================*/

class GiveMeList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  display : 'none',
			  data : false,
			  img : false,
  		}
	}

	componentDidMount() {
		if (this.props.open) {
			this.setState({display : 'flex'})
		}
		if (this.props.img) {
			this.setState({img : this.props.img})
		}
		this.setState({data : this.props.data})
	}

 render() {
   return (
	   	<View >
		    <LinearGradient colors={[ 'transparent' , 'white', 'transparent'  ]}
		          				style={{ padding: 15,
		          						 alignItems: 'center',
		          						 borderRadius: 5 }}>
				<TouchableWithoutFeedback onPress={() => {
														if (this.state.display == 'none')
															this.setState({display : 'flex' })
														else 
															this.setState({display : 'none' }) }} >

					<Text style={{textAlign : 'center', fontSize : 20 }} > 
						{this.props.title}
						<View style={{width : 10 , height : 1}} />
	            		<Image source={(this.state.display == 'none' ) ? down : up } style={{width : 30 , height : 30 }} />
					</Text>
				</TouchableWithoutFeedback>
		    </LinearGradient>


			<TouchableWithoutFeedback onPress={() => this.setState({display : 'none' }) } >
		   		<View  style={{margin : 5 , display : this.state.display, flex : 1, alignItems : 'center'}} >
					{(!this.state.img) ?  <GiveMeTextList data={this.props.data} color={this.props.color} /> : <GiveMeAffiche img={this.state.img} data={this.state.data} /> }
				</View>
			</TouchableWithoutFeedback>



	   	</View>
   	)
 }
}

export default GiveMeList;