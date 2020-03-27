import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faMediumM, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.contact = require('../data/contact.json');
    this.icons = {
      github: faGithub,
      linkedin: faLinkedinIn,
      twitter: faTwitter,
      medium: faMediumM,
    }
    this.state = {
      modalShow: false,
    }
  }

  setModalShow = (modalState) => {
    this.setState({modalShow: modalState});
  }

  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <SideMenu selected='contact' />
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col section-link icons px-0 px-sm-3">
                <div className="row">
                  <div className="my-4 col-12 text-center">
                    <span onClick={() => this.setModalShow(true)}>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                  </div>
                  {this.contact.map((mean, index) => (
                    <div key={index} className="p-0 my-4 col-3 text-center">
                      <a href={mean.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={this.icons[mean.name]} />
                      </a>
                    </div>
                  ))}
                  <ContactModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function ContactModal(props) {
  const handleFocus = (e) => {
    const input = e.target;
    console.log(input)
    console.log(input.id)
    console.log(`#label-${input.id.slice(6)}`)
    const label = document.querySelector(`#label-${input.id.slice(6)}`);
    label.classList.add('active');
  }

  const handleBlur = (e) => {
    const input = e.target;
    const label = document.querySelector(`#label-${input.id.slice(6)}`);
    label.classList.remove('active');
    if (input.value) {
      label.classList.add('filled');
    } else {
      label.classList.remove('filled');
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="contact-modal"
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" className="col d-flex justify-content-between">
          <span>Contact Me</span>
          <span onClick={props.onHide} className="clickable"><FontAwesomeIcon icon={faTimes} /></span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form id="contact-form">
        <Form.Group controlId="input-name">
          <Form.Label id="label-name">Name</Form.Label>
          <Form.Control type="text" required onFocus={handleFocus} onBlur={handleBlur} />
        </Form.Group>
        <Form.Group controlId="input-email">
          <Form.Label id="label-email">Email address</Form.Label>
          <Form.Control type="email" required onFocus={handleFocus} onBlur={handleBlur} />
        </Form.Group>
        <Form.Group controlId="input-subject">
          <Form.Label id="label-subject">Subject</Form.Label>
          <Form.Control type="text" required onFocus={handleFocus} onBlur={handleBlur} />
        </Form.Group>
        <Form.Group controlId="input-message" className="mb-0">
          <Form.Label id="label-message">Message</Form.Label>
          <Form.Control as="textarea" rows="5" required onFocus={handleFocus} onBlur={handleBlur} />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" form="contact-form"><FontAwesomeIcon icon={faPaperPlane} /> Send</Button>
      </Modal.Footer>
    </Modal>
  );
}