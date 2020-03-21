import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import '../style/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight as chevronIcon} from '@fortawesome/free-solid-svg-icons';
// import { faAngleDoubleRight as chevronIcon} from '@fortawesome/free-solid-svg-icons';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.resume = require('../data/resume.json');
    console.log(this.resume.summary[0])
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
    const isShown = cardHeader.classList.contains('show-header');
    this.clearHeaders();
    if (isShown) {
      cardHeader.classList.remove('show-header');
    } else {
      cardHeader.classList.add('show-header');
    }
  }

  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='resume' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col px-5">

                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" onClick={this.handleToggle}>
                      <span>Summary</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {this.resume.summary.map(paragraph => <p>{paragraph}</p>)}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" onClick={this.handleToggle}>
                      <span>Technical Experience</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" onClick={this.handleToggle}>
                      <span>Technical Skills</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" onClick={this.handleToggle}>
                      <span>Work Experience</span>
                      <span><FontAwesomeIcon icon={chevronIcon} /></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        {this.resume.work.map(item => (
                          <div className="mb-3">
                            <p className="mb-0">{item.title}</p>
                            <small className="text-muted smaller">{item.details}</small>
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
                        {this.resume.education.map(item => (
                          <div className="mb-3">
                            <p className="mb-0">{item.title}</p>
                            <small className="text-muted smaller">{item.details}</small>
                          </div>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
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
