import React, { Component } from 'react';
import SideMenu from './SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='contact' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col section-link icons px-1 px-sm-5">
                <div className="row">
                  <div className="my-4 col-6 col-sm-3 text-center"><a href="https://github.com/adlogi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
                  <div className="my-4 col-6 col-sm-3 text-center"><a href="https://www.linkedin.com/in/adlogi/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
                  <div className="my-4 col-6 col-sm-3 text-center"><a href="https://twitter.com/adlogi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></div>
                  <div className="my-4 col-6 col-sm-3 text-center"><a href="https://medium.com/@adlogi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
