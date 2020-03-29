import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Intro from './components/Intro';
import HomePage from './components/HomePage';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import NotFound from './components/404'

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
          <Route
            exact path="/404"
            component={NotFound}
          />
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
      
    );
  }
}