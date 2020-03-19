import React from 'react';
import Intro from './components/Intro';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import HomePage from './components/HomePage';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'


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
      <Router>
        <Switch>
          <Route
            exact path='/'
            render={() =>
              this.state.playingIntro ? <Intro showHome={this.showHome} /> : <HomePage />
            }
          />
          <Route
            exact path='/bio'
            component={Bio}
          />
          <Route
            exact path='/resume'
            component={Resume}
          />
          <Route
            exact path='/portfolio'
            component={Portfolio}
          />
          <Route
            exact path='/contact'
            component={Contact}
          />
        </Switch>
      </Router>
      
    );
  }
}