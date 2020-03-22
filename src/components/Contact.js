import React, { Component } from 'react';
import SideMenu from './SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faMediumM, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.contact = require('../data/contact.json');
    this.icons = {
      github: faGithub,
      linkedin: faLinkedinIn,
      twitter: faTwitter,
      medium: faMediumM,
    }
  }

  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='contact' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col section-link icons px-1 px-sm-5">
                <div className="row">
                  {this.contact.map(mean => (
                    <div className="my-4 col-6 col-sm-3 text-center">
                      <a href={mean.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={this.icons[mean.name]} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
