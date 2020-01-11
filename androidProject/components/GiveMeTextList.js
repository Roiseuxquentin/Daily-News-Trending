import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';

class GiveMeTextList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  data : null,
  		}
	}

	componentDidMount() {
		this.setState({data : this.props.data})
	}

 render() {
   return (
        <FlatList
		          	data={this.state.data}
			        numColumns={1}
		          	renderItem={({item, index}) => {
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
					}} />
  
   	)
 }
}

export default GiveMeTextList