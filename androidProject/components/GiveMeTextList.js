import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';

class GiveMeTextList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  data : {id : 42, src : 'load...'},
  		}
	}

	componentDidMount() {

		const DATA = this.props.data.map((elt) => {
			      return { id: (Math.random * 100), src: elt };
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
		          			return <Text style={{fontSize : 18 ,
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
												padding : 15 }} 
										key={Number(item.id)} > {item.src}</Text> 
					}} />
   	)
 }
}

export default GiveMeTextList