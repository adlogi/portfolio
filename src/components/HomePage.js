import React, { Component } from 'react';
import '../style/HomePage.css';
import { Link } from 'react-router-dom';


export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div className="col-12 col-md-3 align-self-center">
            <h1 className="short-name text-center my-5">
            <Link to='./'>A<span className="colored">.</span>Y<span className="colored">.</span>idlbi<span className="smile colored">)</span></Link>
            </h1>
          </div>
          <div className="col-12 col-md-9 h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 side-bar h-100"></div>
              <div className="col-12 section-link text-center h-25">
                <span><Link to='./bio'>BIO</Link></span>
              </div>
              <div className="col-12 section-link text-center h-25">
                <span><Link to='./resume'>RESUME</Link></span>
              </div>
              <div className="col-12 section-link text-center h-25">
                <span><Link to='./portfolio'>PORTFOLIO</Link></span>
              </div>
              <div className="col-12 section-link text-center h-25">
                <span><Link to='./contact'>CONTACT</Link></span>
              </div>
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