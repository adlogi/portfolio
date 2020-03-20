import React, { Component } from 'react';
import '../style/HomePage.css';
import { Link } from 'react-router-dom';
import bio from '../media/bio.jpg';
import resume from '../media/resume.jpg';
import portfolio from '../media/portfolio.jpg';
import contact from '../media/contact.jpg';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div className="col-md-4 col-lg-3 align-self-center">
            <h1 className="short-name text-center mt-5 mt-md-0">
            <Link to='./'>A<span className="colored">.</span>Y<span className="colored">.</span>idlbi<span className="smile colored">)</span></Link>
            </h1>
          </div>
          <div className="col-md-8 col-lg-9 flex-grow-1 mt-5 mt-md-0">
            <div className="row align-items-center h-100">
              <div className="col-12 side-drop-color h-100"></div>
              <div className="col-12 side-drop-image h-100"></div>
              <div className="col-12 section-link text-center h-25">
                <Link to='./bio'><span id="bio-link">BIO</span></Link>
              </div>
              <div className="col-12 section-link text-center h-25">
                <Link to='./resume'><span id="resume-link">RESUME</span></Link>
              </div>
              <div className="col-12 section-link text-center h-25">
                <Link to='./portfolio'><span id="portfolio-link">PORTFOLIO</span></Link>
              </div>
              <div className="col-12 section-link text-center h-25">
                <Link to='./contact'><span id="contact-link">CONTACT</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const sectionLinks = document.querySelectorAll('.section-link span');
    const sideDropColor = document.querySelector('.side-drop-color');
    const sideDropImage = document.querySelector('.side-drop-image');
    const bgImages = {
      'bio': bio,
      'resume': resume,
      'portfolio': portfolio,
      'contact': contact
    }

    sectionLinks.forEach(section => section.addEventListener('mouseover', (event) => {
      sideDropImage.style.setProperty('--image-source', `url(${bgImages[event.target.id.slice(0, -5)]})`);
      sideDropColor.classList.add('side-drop-color-active');
      sideDropImage.classList.add('side-drop-image-active');
    }, false));
    sectionLinks.forEach(section => section.addEventListener('mouseout', () => {
      sideDropColor.classList.remove('side-drop-color-active');
      sideDropImage.classList.remove('side-drop-image-active');
    }, false));
  }
}