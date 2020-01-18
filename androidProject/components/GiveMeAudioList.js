import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'

import { Audio } from 'expo-av'

import play from '../ressources/images/playList.png'
import pause from '../ressources/images/pauseList.png'
export default class GiveMeAudioList extends React.Component {
	state = {
		isPlaying: false ,
		// url:'',
		playbackInstance: null,
		currentIndex: 1,
		volume: 1.0,
		isBuffering: true
	}


	async componentDidMount() {
		// this.setState({ url : this.props.audio} )
		try {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
				playsInSilentModeIOS: true,
				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
				shouldDuckAndroid: true,
				staysActiveInBackground: true,
				playThroughEarpieceAndroid: true
			})
		} catch (e) {
			console.log(e)
		}
	}
	componentDidMount() {
			this.loadAudio()
	}
	
	async componentWillUnmount() {
	    const { playbackInstance } = this.state;
	    await playbackInstance.pauseAsync();
  	}

	async loadAudio() {
		const { currentIndex, isPlaying, volume } = this.state

		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: this.props.audio
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume
			}

			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
			await playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})
		} catch (e) {
			console.log(e)
		}
	}

	onPlaybackStatusUpdate = status => {
		this.setState({
			isBuffering: status.isBuffering
		})
	}

	handlePlayPause = async () => {
		if ( !this.state.isPlaying) {
			setTimeout(this.handlePlayPause  , 60000 )
		}
		// COSTO (0.0)
		const { isPlaying, playbackInstance } = this.state
		isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

		this.setState({
			isPlaying: !isPlaying
		})
	}

	render() {
		return (
				<View style={styles.controls}>
					<TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
						{this.state.isPlaying ? (
							<Image source={pause} style={{height : 80,width : 80}} />
						) : (
							<Image source={play} style={{height : 80,width : 80}} />
						)}
					</TouchableOpacity>
				</View>
		)
	}
}

const styles = StyleSheet.create({
	controls: {
		position : 'absolute',
		right : 0,
		top : 0,
		flexDirection: 'row',
		alignItems : 'center'
	},
	control: {
		margin: 5
	},
})
