import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';


/*==========================================='\ 
||                      .__                  || 
||   ____   ____   ____ |  |   ____   ____   || 
|| _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || 
|| \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || 
||  \___  >\___  >___  /|____/\____/ \____/  || 
||      \/     \/_____/                  2020|| 
\.===========================================*/


class GiveMeTextList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  data : {id : 42, url : 'load...'},
  		}
	}

	componentDidMount() {

		const DATA = this.props.data.map((url,index) => {
			      return { id: (Math.random * 100 + index), url: url };
			    });
		this.setState({data : DATA})
	}

 render() {
   return (
        <FlatList
          	data={this.state.data}
	        numColumns={1}
			keyExtractor={(item, index) => (index + Math.random()).toString()} 
          	renderItem={({item, index}) => {
          			
          		if ( !index && this.props.emoji ) {
          			return <Text style={{fontSize : 14 ,
      									margin : 15,
      									textAlign : 'center' }} 
								key={Number(item.id)} >{this.props.emoji ? this.props.emoji : "" } {item.url} {this.props.emoji ? this.props.emoji : ""} </Text> 
          		} else {
          			return <Text style={{
          								fontSize : 18 ,
      									margin : 5,
      									textAlign : 'center',
      									padding : 7,
      									borderRadius :2,
			   					 		shadowColor: "green",
										shadowOpacity: 0.20,
										shadowRadius: 1.41,
										shadowOffset: {
										width: 0,
										height: 1,
										},
										elevation: 2, }} 
								key={Number(item.id)} > {item.url}</Text> 
			}
			}} />
   		)
	 }
}

export default GiveMeTextList