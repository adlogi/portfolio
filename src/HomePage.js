import React, { Component } from 'react';
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div className="col-2 align-self-center">
            <h1 className="short-name text-center">
              A<span className="colored">.</span>Y<span className="colored">.</span>idlbi<span className="smile colored">)</span>
            </h1>
          </div>
          <div className="col-10 side-bar"></div>
          <div className="col-10 align-self-center">
            <div className="row">
              <div className="col-12 section-link text-center"><span>BIO</span></div>
            </div>
            <div className="row">
              <div className="col-12 section-link text-center"><span>RESUME</span></div>
            </div>
            <div className="row">
              <div className="col-12 section-link text-center"><span>PORTFOLIO</span></div>
            </div>
            <div className="row">
              <div className="col-12 section-link text-center"><span>CONTACT</span></div>
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