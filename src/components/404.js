import React, { Component } from 'react';
import SideMenu from './SideMenu';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='404' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col px-5">
                <h2>Whoops! (404)</h2>
                <p>I couldn't find the page you're looking for. Why don't you try one of the links on the left — or just check my <a href="https://github.com/adlogi/" target="_blank" rel="noopener noreferrer" className="font-italic">GitHub</a> repo?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
