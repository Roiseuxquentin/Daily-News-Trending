import React, {Component} from 'react';
import {  Image ,Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';

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

// I USE https://ethercreative.github.io/react-native-shadow-generator/ FOR SHADOW BORDER

import consultIMG from '../ressources/images/consult.jpg'
import backIMG from '../ressources/images/back.jpeg'
	        		
class GiveMeSante extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalVisible: false,
			sentinL : ['gastro','grippe'],
			ars : ['news','gouv'],
			indice : 'green',
  		}
	}

	componentDidMount() {
		const infoConsult =  this.props.data.sante.sentinl.join('')

		this.setState({ sentinL : this.props.data.sante.sentinl ,
	                	ars : this.props.data.sante.ars  })
		
		if (infoConsult.includes('modéré')) {
			this.setState({indice: 'orange'});
		} else if (infoConsult.includes('fort')) {
			this.setState({indice: 'red'});
		}

	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	dataMapped(data,consultations) {
		return data.map((elt, index) => {
			if (!index && consultations)
				return <Text key={index} style={{ textAlign : 'center' ,  fontWeight : '600', textDecorationLine : 'underline', fontSize : 18, marginLeft : 10 , marginRight : 10}} >{elt}</Text>
			else 
				return (
					<View key={index} style={{flex :1 , flexDirection : 'row', marginTop : 10, marginBottom : 5 }} >
						<Text style={{ fontWeight : '700', fontSize : 30, margin : 5 , marginLeft : 15 , color : 'red' }} >✙</Text>
						<Text style={{ marginLeft : 15,marginTop : 10, marginBottom : 5, width : '80%', fontWeight : '400', fontSize : 14 }} > {elt}</Text>
					</View>
					)
		} )
	}

	render() {
		const styles = StyleSheet.create({
			bigContainer : {
				zIndex : 1,
				width: '92%',
				marginLeft : '4%',
				marginBottom : 20,
				marginTop : 20,
				borderColor : 'green' ,
			},
			containerStyle: {
				borderRadius: 3,
				backgroundColor :  'rgba(214, 234, 248, 0.5)',
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.23,
				shadowRadius: 2.62,
				elevation: 4,
				flex:1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center' 
			},
			consultText: {
				fontSize : 14,
				width : '95%',
				fontWeight : '400',
				textDecorationLine : 'underline',
				textAlign : 'left' 
			},
			IndiceText : {
				fontSize : 30,
				fontWeight : '500',
				marginRight : 20,
				textAlign : 'center',
				marginBottom : 20,
				color : this.state.indice 
			},
			consultIMG : {
				width: '75%',
				resizeMode: 'stretch' ,
				height: 155,
				zIndex : 1,
				justifyContent: 'center',
				alignItems: 'center'
			}
		})

		return (
			<View style={styles.bigContainer} >
				<Modal overFullScreen={true}
						animationType="slide"
						transparent={false}
						visible={this.state.modalVisible}
						onRequestClose={() => {
	                  		this.setModalVisible(!this.state.modalVisible) }} >

		            <View style={{flex : 1 ,justifyContent : 'center', marginTop : 50}} >
		    			{/*news SENTINL*/}
						{this.dataMapped(this.state.sentinL,true)}
		            </View>

		            <View style={{flex : 1 ,justifyContent : 'center', flexDirection : 'row', margin : 50}} >
		              <TouchableHighlight
		                onPress={() => {
		                  this.setModalVisible(!this.state.modalVisible);
		                }}>
						<Image  source={backIMG} style={{width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }} />
		              </TouchableHighlight>
		            </View>
		        
		        </Modal>

		        <TouchableHighlight onPress={() => this.setModalVisible(true) }>
			        
			        <View style={styles.containerStyle} >
			        	<View style={{ flex:1, flexDirection: 'column' ,width: '40%',  justifyContent: 'center', alignItems: 'center' }} >
		        			<Image  source={consultIMG} style={styles.consultIMG} />
			        	</View>
			        	<View style={{ width: '80%', flex:1, flexDirection: 'column' ,height: 200,  justifyContent: 'center', alignItems: 'center' }} >
			        		<Text style={{ marginRight : 20 , fontSize : 30 }} > ⚕️ </Text>  
			        		<Text style={styles.IndiceText} > ○ </Text>  
			        		<Text style={styles.consultText} > Frequences et typologie des consultations medicales.</Text>
			        	</View>
			        </View>

		        </TouchableHighlight>
		    {/*news ARS*/}
		        {this.dataMapped(this.state.ars,false)}
			</View>
			)
	}
}

export default GiveMeSante