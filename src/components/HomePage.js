import React, { Component } from 'react';
import '../style/HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div className="col-xl-3 col-lg-12 align-self-center">
            <h1 className="short-name text-xl-center text-lg-left">
              A<span className="colored">.</span>Y<span className="colored">.</span>idlbi<span className="smile colored">)</span>
            </h1>
          </div>
          <div className="col-xl-9 col-lg-12 h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 side-bar h-100"></div>
              <div className="col-12 section-link text-center h-25"><span>BIO</span></div>
              <div className="col-12 section-link text-center h-25"><span>RESUME</span></div>
              <div className="col-12 section-link text-center h-25"><span>PORTFOLIO</span></div>
              <div className="col-12 section-link text-center h-25"><span>CONTACT</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const sectionLinks = document.querySelectorAll('.section-link span');
    const sideBar = document.querySelector('.side-bar');

    sectionLinks.forEach(section => section.addEventListener('mouseover', () => {
      sideBar.classList.add('side-bar-extended');
    }, false));
    sectionLinks.forEach(section => section.addEventListener('mouseout', () => {
      sideBar.classList.remove('side-bar-extended')
    }, false));
  }
}