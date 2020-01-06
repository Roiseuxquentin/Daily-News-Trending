import React, {Component} from 'react';
import { View, FlatList, Text, Image, TouchableWithoutFeedback } from 'react-native';

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
			  img : false
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
	   	<View style={{ marginTop : 15 }} >

			<TouchableWithoutFeedback onPress={() => {
				if (this.state.display == 'none')
					this.setState({display : 'flex' })
				else 
					this.setState({display : 'none' }) }} >

				<Text style={{textAlign : 'center', fontSize : 24 }} > 
					{this.props.title}
					<View style={{width : 10 , height : 1}} />
            		<Image source={(this.state.display == 'none' ) ? down : up } style={{width : 20 , height : 20 }} />
				</Text>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback onPress={() => this.setState({display : 'none' }) } >
		   		<View  style={{margin : 25 , display : this.state.display, flex : 1, flexDirection : 'row'}} >
			        <FlatList
			          	data={this.state.data}
			          	renderItem={({item, index}) => {
			          		if (!this.state.img) {
			          			return <Text key={(index + (Math.random() * 100 ) )} 
			          							style={{fontSize : 18 ,
		          									marginTop : 5,
		          									textAlign : 'center',
		          									borderRadius :2,
						   							shadowColor: "green",
													shadowOpacity: 0.20,
													shadowRadius: 1.41,
													shadowOffset: {
													width: 0,
													height: 1,
													},
													height: 100,
													elevation: 2,
													padding : 15 }} > {item}</Text> 
			          		}else {
			          			return( <View key={(index + Math.random() * 100 )} 
											 style={{grid : 1, marginTop : 25, justifyContent : 'center', alignItems : 'center'}} > 
			          						<Text style={{fontSize : 24 , fontWeight : '800', marginTop : 5 }} >{item}</Text> 
			          						<Image source={{uri : this.state.img[index]}} style={{width : 150 , height : 242, flex : 1}} /> 
					          			</View>) 
			          		}
						}} />
				</View>
			</TouchableWithoutFeedback>

	   	</View>
   	)
 }
}

export default GiveMeList;