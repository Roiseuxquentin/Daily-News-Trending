import React, {Component} from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import Loader from './loader.js'

class GiveMeAffiche extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  data : null,
			  img : null
  		}
	}

	componentDidMount() {
		this.setState({data : this.props.data, img : this.props.img })
	}

 render() {
   return (
		<FlatList data={this.state.data}
			      numColumns={4}
			      renderItem={({item, index}) => {
			      		if (!this.state.img) {
			      			return <Loader /> 
			      		}else {
			      			return( <View key={(index + Math.random() * 100 )} 
										 style={{grid : 1, marginTop : 25, justifyContent : 'center', alignItems : 'center'}} > 
			      						<Text style={{fontSize : 9 , fontWeight : '800', marginTop : 5 }} >
			      						{(item.length > 17) ? `${item.slice(0,17)}...` : item }
			      						</Text> 
			      						<Image source={{uri : this.state.img[index]}} style={{margin : 2 ,width : 80 , height : 110, flex : 1}} /> 
				          			</View>) 
			      		}
					}} />
   	)
 }
}

export default GiveMeAffiche;