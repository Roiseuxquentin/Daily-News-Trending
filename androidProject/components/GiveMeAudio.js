import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'

export default class GiveMeAudio extends React.Component {
	state = {
		isPlaying: false ,
		// url:'',
		playbackInstance: null,
		currentIndex: 0,
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
				// uri : 'http://rf.proxycast.org/1654001251106430976/11673-27.12.2019-ITEMA_22240004-0.mp3',
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
							<Ionicons name='ios-pause' size={48} color='#444' />
						) : (
							<Ionicons name='ios-play-circle' size={48} color='#444' />
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
		flexDirection: 'row'
	},
	control: {
		margin: 5
	},
})
