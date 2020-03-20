import React, { Component } from 'react';
import SideMenu from './SideMenu';
import moviexplorer from '../media/moviexplorer.png';
import minesweeper from '../media/minesweeper.png';
import abbuloka from '../media/abbuloka.png';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div id="side-menu-container" className="col-md-4 col-lg-3 align-self-center">
            <SideMenu selected='portfolio' />
          </div>
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col px-5">
                <Carousel fade={true}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={moviexplorer}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>movieXplorer</h3>
                        <p>
                          <a href="https://github.com/adlogi/movieXplorer" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>{' '}
                          <a href="./portfolio" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a>
                        </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={minesweeper}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Minesweeper</h3>
                        <p>
                          <a href="https://github.com/adlogi/minesweeper" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>{' '}
                          <a href="https://adlogi.github.io/minesweeper/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a>
                        </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={abbuloka}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Abbuloka</h3>
                        <p>
                          <a href="https://github.com/bsurmen/abbulokapremium" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>{' '}
                          <a href="https://abbuloka.netlify.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a>
                        </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
