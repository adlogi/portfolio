import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/SideMenu.css';

export default class SideMenu extends Component {
  render() {
    const links = ['bio', 'resume', 'portfolio', 'contact'];
    return (
      <>
        <div className="row h-20 mb-5">
          <div className="col">
            <h1 className="short-name text-center mt-5 mt-md-0"><Link to='./'>
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
      </>
    )
  }
}
