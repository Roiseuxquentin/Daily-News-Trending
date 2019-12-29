import React, { Component } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import Loader from './loader.js'

import { Image } from 'react-native';

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


class GiveMeNewsPaper extends Component {

  constructor(props) {
      super(props)
      this.state={
        urls : false,
        count: 0
      }

    }

    componentDidMount() {
      const timer = new Date()
      const month = timer.getMonth() < 9 ? `0${timer.getMonth() + 1 }` : (timer.getMonth() + 1)
      let dayNumber

      if ((timer.getDay() !== 0)&&(timer.getDay() < 6)) {
        dayNumber = timer.getDate() <= 9 ? `0${timer.getDate()}` : (timer.getDate())
      } else {
        dayNumber = timer.getDate() -2 <= 9 ? `0${timer.getDate()}` : (timer.getDate())
      }

      const urls = [
        `http://img.kiosko.net/${timer.getFullYear()}/${month}/${dayNumber - 1}/us/newyork_times.750.jpg`,
        `http://img.kiosko.net/${timer.getFullYear()}/${month}/${dayNumber}/fr/lefigaro.750.jpg`,
        `http://img.kiosko.net/${timer.getFullYear()}/${month}/${dayNumber}/ch/tribune_geneve.750.jpg`,
        `http://img.kiosko.net/${timer.getFullYear()}/${month}/${dayNumber}/uk/daily_telegraph.750.jpg`]

      this.setState({ urls : urls })
    }

  render() {
    if (this.state.urls) {
      return ( <SliderBox sliderBoxHeight={650} images={this.state.urls} /> )
    } else {
      return ( <Loader /> )
    }
  }
}

export default GiveMeNewsPaper