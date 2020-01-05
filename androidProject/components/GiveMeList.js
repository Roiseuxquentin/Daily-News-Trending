import React, {Component} from 'react';
import { View, FlatList, Text, TouchableWithoutFeedback } from 'react-native';

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
			  data : ['']
  		}
	}

	componentDidMount() {
		if (!this.props.title) {
			this.setState({display : 'flex'})
		}
		this.setState({data : this.props.data})
	}

 render() {
   return (
	   	<View>

			<TouchableWithoutFeedback onPress={() => {
				if (this.state.display == 'none')
					this.setState({display : 'flex' })
				else 
					this.setState({display : 'none' })
			}} >
				<Text style={{textAlign : 'center', fontSize : 24 }} > {this.props.title} + </Text>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback onPress={() => this.setState({display : 'none' }) } >
		   		<View  >
			        <FlatList
			        	style={{margin : 25 , display : this.state.display}}
			          	data={this.state.data}
			          	renderItem={({item}) => <Text >{item}</Text>} />
				</View>
			</TouchableWithoutFeedback>

	   	</View>
   	)
 }
}

export default GiveMeList;