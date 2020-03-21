import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import '../style/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight as chevronIcon} from '@fortawesome/free-solid-svg-icons';
// import { faAngleDoubleRight as chevronIcon} from '@fortawesome/free-solid-svg-icons';

export default class Resume extends Component {
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
                        <p className="mb-0">Front-end web developer with a passion for [their personal mission].  With experience in Ruby on Rails, JavaScript, and React and a background in X, I discovered web development through  [Y]. I bring strong skills in [team-building and project management] that help [what type of companies] [drive what positive result/impact]. [Other unique anecdote]. With a background in computer engineering and learning sciences, I know how to approach people and technology.</p>
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
                        <p className="mb-0">Creative Learning Consultant (2014 - present)</p>
                        <p className="text-muted smaller">JavaScript & React online program / Re:Coded Istanbul Bootcamp.</p>
                        <p className="mt-3 mb-0">SM in Media Arts & Sciences, MIT (2014)</p>
                        <small className="text-muted smaller">The Lifelong Kindergarten research group, developing new technologies and activities that engage people in creative learning experiences.</small>
                        <p className="mt-3 mb-0">BS in Computer Engineering, Damascus University (2009)</p>
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
                        <p className="mb-0">Front-End Web Development Program, Flatiron School (2020)</p>
                        <p className="text-muted smaller">JavaScript & React online program / Re:Coded Istanbul Bootcamp.</p>
                        <p className="mt-3 mb-0">SM in Media Arts & Sciences, MIT (2014)</p>
                        <small className="text-muted smaller">The Lifelong Kindergarten research group, developing new technologies and activities that engage people in creative learning experiences.</small>
                        <p className="mt-3 mb-0">BS in Computer Engineering, Damascus University (2009)</p>
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
