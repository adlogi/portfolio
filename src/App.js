import React from 'react';
import Intro from './Intro';
import HomePage from './HomePage';

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      playingIntro: true,
    }
  }

  showHome = () => {
    this.setState({playingIntro: false});
  }

  render() {
    return (
      this.state.playingIntro ? <Intro showHome={this.showHome} /> : <HomePage />
    );
  }
}