import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import '../style/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faLink, faChevronCircleRight as chevronIcon, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import resumePdf from '../media/idlbi-resume.pdf';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.resume = require('../data/resume.json');
  }
  
  // remove the 'show-header' class from all card headers
  clearHeaders = () => {
    const cardHeaders = document.querySelectorAll('.card-header');
    cardHeaders.forEach(header => {
      header.classList.remove('show-header');
    });
  }

  // toggle a card header on clicking by toggling the 'show-header' class
  handleToggle = (event) => {
    let cardHeader = event.nativeEvent.target;
    if (cardHeader.nodeName === 'SPAN') {
      cardHeader = cardHeader.parentNode;
    }
    if (cardHeader.querySelector('#download')) {
      this.clearHeaders();
      const link = document.createElement('a');
      link.href = resumePdf;
      link.download = 'idlbi-resume.pdf';
      link.dispatchEvent(new MouseEvent('click'));
    } else {
      const isShown = cardHeader.classList.contains('show-header');
      this.clearHeaders();
      if (isShown) {
        cardHeader.classList.remove('show-header');
      } else {
        cardHeader.classList.add('show-header');
      }
    }
  }

  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='resume' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col m-auto px-1 px-md-2 px-lg-5">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" onClick={this.handleToggle}>
                      <span>Summary</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {this.resume.summary.map((paragraph, index) =>
                          <p key={index}>{paragraph}</p>
                        )}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" onClick={this.handleToggle}>
                      <span>Technical Experience</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        {this.resume.experience.map((project, index) => (
                          <div key={index} className="mb-3">
                            <h4 className="mb-0 pb-1 border-bottom d-flex justify-content-between">
                              {project.title}
                              <small className="text-muted icons smaller">
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a>{' '}
                                {('github' in project.links) ? (<a href={project.links.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>) : null}
                                {('gitlab' in project.links) ? (<a href={project.links.gitlab} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGitlab} /></a>) : null}
                              </small>
                            </h4>
                            <p className="pl-2 pl-sm-3 mb-0 mt-2">
                              {project.description}
                            </p>
                            <ul className="list-unstyled">
                              {project.details.map((detail, index) => 
                                  <li key={index} className="pl-4 pl-sm-5 my-1 inner">{detail}</li>
                              )}
                            </ul>
                          </div>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" onClick={this.handleToggle}>
                      <span>Technical Skills</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        {this.resume.skills.map((skill, index) =>
                          <p key={index} className="pl-2 pl-sm-3 mb-0 mt-2">{skill}</p>
                        )}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" onClick={this.handleToggle}>
                      <span>Work Experience</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        {this.resume.work.map((job, index) => (
                          <div key={index} className="mb-3">
                            <h4 className="mb-0 pb-1 border-bottom d-flex justify-content-between">
                              {job.organization}
                              <small className="text-muted smaller">{job.location}</small>
                            </h4>
                            {job.positions.map((position, index) => { return (
                              <div key={index}>
                                <p className="pl-2 pl-sm-3 mb-0 mt-2 d-flex justify-content-between">
                                  {position.title}
                                  <small className="text-muted smaller text-nowrap">{position.dates}</small>
                                </p>
                                <ul className="list-unstyled">
                                  {position.details.map((detail, index) => 
                                      <li key={index} className="pl-4 pl-sm-5 my-1 inner">{detail}</li>
                                  )}
                                </ul>
                              </div>
                            )})}
                          </div>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4" onClick={this.handleToggle}>
                      <span>Education</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        {this.resume.education.map((degree, index) => (
                          <div key={index} className="mb-3">
                            <p className="mb-0">{degree.title}</p>
                            <ul className="list-unstyled">
                              {degree.details.map((detail, index) =>
                                <li key={index} className="pl-4 pl-sm-5 my-1 inner">{detail}</li>
                              )}
                            </ul>
                          </div>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} onClick={this.handleToggle} >
                      <span id="download"><FontAwesomeIcon icon={faFileDownload} /> Download (PDF)</span>
                    </Accordion.Toggle>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const cardHeaders = document.querySelectorAll('.card-header');
    cardHeaders.forEach((header) => {
      header.classList.add('d-flex', 'justify-content-between');
    });
    // the first card is shown by default
    cardHeaders[0].classList.add('show-header');
  }
}
