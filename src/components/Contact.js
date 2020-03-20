import React, { Component } from 'react';
import SideMenu from './SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div id="side-menu-container" className="col-md-4 col-lg-3 align-self-center">
            <SideMenu selected='contact' />
          </div>
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col section-link px-5">
                <div className="row">
                  <div className="col-sm-4 text-center"><a href="https://github.com/adlogi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
                  <div className="col-sm-4 text-center"><a href="https://www.linkedin.com/in/adlogi/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
                  <div className="col-sm-4 text-center"><a href="https://twitter.com/adlogi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
