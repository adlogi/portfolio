import React, { Component } from 'react';
import SideMenu from './SideMenu';

export default class Bio extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div className="col-md-4 col-lg-3 align-self-center">
            <SideMenu selected='bio' />
          </div>
          <div className="col-md-8 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col px-5">
                <h2>Selam!</h2>
                <p>I'm Abdulrahman — a.k.a. <span className="font-italic">@adlogi</span>. I was born in Saudi Arabia, grew up in Syria, studied in the US, and now living in Turkey. I'm a front-end developer with experince in ReactJS.</p>
                <p>I studied computer engineering and was part of the team at MIT that develops <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" className="font-italic">Scratch</a>: the children's most popular programming language. In a parallel life, I design creative learning spaces and activities for children.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
