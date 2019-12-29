import React, {Component} from 'react';

import { View, Image, Text, StyleSheet, } from 'react-native';

import bitcointIMG from './../ressources/images/bitcoin.png';
import goldIMG from './../ressources/images/gold.png';
import barilIMG from './../ressources/images/oil.png';


class GiveMeMoneyStack extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"gold" : "€",
			"btc" : "€",
			"baril" : "$",
		}

	}

	componentDidMount() {
		this.setState({
	                gold : this.props.data.gold ,
	                baril : this.props.data.baril ,
	                btc : this.props.data.btc ,
		})
	}



	render() {
		const styles = StyleSheet.create({
			textPrice : {
				marginBottom : 5,
				textAlign : 'center',
				fontSize: 14,
				fontWeight: '400',
			},
			bigContainer : {
				flex: 1,
				flexDirection: 'row' ,
				justifyContent : 'center',alignItems: 'center',
				width : '80%',
				marginLeft : '8%',
				marginTop : 20,
				marginBottom : 20,
				borderColor : 'black',
				borderRadius : 5,
				borderBottomWidth : 2,
				borderTopWidth : 2
			},
			containers : { 
				justifyContent : 'center',
				alignItems: 'center',
				margin: 5,
				marginTop : 7,
				flex: 1 ,
				flexDirection : 'row'
			},
			img : {
				width: 20,
				height: 20
			}
		})

		return (<View style={styles.bigContainer}   >
					<View style={styles.containers} >
	            		<Image source={goldIMG} style={styles.img} />
						<Text style={styles.textPrice}  >  {this.state.gold}</Text>
					</View>
					<View style={styles.containers} >
	            		<Image source={barilIMG} style={styles.img} />
						<Text style={styles.textPrice} > {this.state.baril}</Text>
					</View>
					<View style={styles.containers} >
	            		<Image source={bitcointIMG} style={styles.img} />
						<Text style={styles.textPrice} > {this.state.btc}</Text>
					</View>
				</View> )
	}
}

export default GiveMeMoneyStack;