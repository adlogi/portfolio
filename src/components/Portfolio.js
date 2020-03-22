import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Carousel from 'react-bootstrap/Carousel';
import '../style/Portfolio.css';
import moviexplorer from '../media/moviexplorer.jpg';
import minesweeper from '../media/minesweeper.jpg';
import abbuloka from '../media/abbuloka.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.portfolio = require('../data/portfolio.json');
    this.images = {
      'movieXplorer': moviexplorer,
      'Minesweeper': minesweeper,
      'Abbuloka': abbuloka,
    }
  }
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='portfolio' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col px-5">
                <Carousel fade={true}>
                  {this.portfolio.map((project, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={this.images[project.name]}
                        alt={project.name}
                      />
                      <Carousel.Caption>
                        <h3>{project.name}</h3>
                        <p className="icons">
                          <a href={project.live} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a>{' '}
                          <a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
