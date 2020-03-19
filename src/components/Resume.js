import React, { Component } from 'react';
import SideMenu from './SideMenu';

export default class Resume extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='resume' />
          <div className="col-xl-9 col-lg-12 h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 section-link pr-5 pl-4 pl-xl-0">
                <h2>Selam!</h2>
                <p>I'm Abdulrahman. I was born in Saudi Arabia, grew up in Syria, studied in the US, and now living in Turkey. I'm a front-end developer with experince in ReactJS.</p>
                <p>I studied computer engineering and was part of the team at MIT that develops Scratch: the children's most popular programming language. In a parallel life, I design learning spaces and activities for children.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
