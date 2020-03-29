import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/SideMenu.css';
import bio from '../media/bio.jpg';
import resume from '../media/resume.jpg';
import portfolio from '../media/portfolio.jpg';
import contact from '../media/contact.jpg';
import notFound from '../media/404.jpg';
export default class SideMenu extends Component {
  render() {
    const links = ['bio', 'resume', 'portfolio', 'contact'];
    return (
      <div id="side-menu-container" className="col-md-4 col-lg-3 align-self-center p-0">
        <div className="w-100 h-100">
          <div className="w-100 my-4">
            <div className="row h-20 mb-5">
              <div className="col">
                <h1 className="short-name text-center"><Link to='./'>
                  A<span className="colored">.</span>Y<span className="colored">.</span>idlbi<span className="smile colored">)</span></Link>
                </h1>
              </div>
            </div>
            {links.map(link => {
              return (
                <div className="row h-20" key={link}>
                  <div className="col text-center side-menu">
                    <span className={`${this.props.selected === link ? 'selected' : ''}`}><Link to={`./${link}`}>{link.toUpperCase()}</Link></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const bgImages = {
      'bio': bio,
      'resume': resume,
      'portfolio': portfolio,
      'contact': contact,
      '404': notFound,
    }
    const SideMenuContainer = document.querySelector('#side-menu-container')
    SideMenuContainer.style.setProperty('--menu-background-source', `url(${bgImages[this.props.selected]})`);
  }
}
