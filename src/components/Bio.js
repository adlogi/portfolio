import React, { Component } from 'react';
import SideMenu from './SideMenu';

export default class Bio extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='bio' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col px-5">
                <h2>Selam!</h2>
                <p>I'm Abdulrahman Y. idlbi — a.k.a. <span className="font-italic">@adlogi</span>. I was born in Saudi Arabia, grew up in Syria, studied in the US, and now living in Turkey. I'm a front-end developer with experince in ReactJS.</p>
                <p>I see coding as a form of expression: a paintbrush. And I like to use it to create experiences that help others express themselves too.</p>
                <p>I studied computer engineering and learning sciences. I was part of the team at MIT that develops <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" className="font-italic">Scratch</a>: the children's most popular programming language. Beside coding, I design creative learning spaces and activities for children in various contexts. Did you watch <a href="https://www.youtube.com/watch?v=uOwWqOHE6ng" target="_blank" rel="noopener noreferrer" className="font-italic">my talk</a> about keeping children motivated to learn?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
