import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import SideMenu from './SideMenu';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faTwitter, faMediumM, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.contact = require('../data/contact.json');
    this.icons = {
      github: faGithub,
      gitlab: faGitlab,
      linkedin: faLinkedinIn,
      twitter: faTwitter,
      medium: faMediumM,
    }
    this.state = {
      modalShow: false,
      mailResult: null,
    }
  }

  setModalShow = (modalState) => {
    this.setState({modalShow: modalState});
  }

  setMailResult = (modalState) => {
    this.setState({mailResult: modalState});
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
                    <div key={index} className="p-0 my-4 col text-center">
                      <a href={mean.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={this.icons[mean.name]} />
                      </a>
                    </div>
                  ))}
                  <ContactModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    onMailSent={this.setMailResult}
                  />
                  <MailResult
                    show={this.state.mailResult}
                    onHide={() => this.setMailResult(null)}
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHide();
    props.onMailSent('sending');
    const form = e.target;
    const messageParams = {
      senderName: form.elements[0].value,
      senderEmail: form.elements[1].value,
      subject: form.elements[2].value,
      message: form.elements[3].value,
    }
    emailjs.send('default_service', 'ayidlbi_contact', messageParams, 'user_QBsjyXi4xAWR0CqA2zFnZ')
      .then(function (response) {
        // console.log('SUCCESS!', response.status, response.text);
        props.onMailSent('success');
      }, function (error) {
        // console.log('FAILED...', error);
        props.onMailSent('failure');
      });
  }

  let modalProps = Object.assign({}, props);
  delete modalProps.onMailSent;
  return (
    <Modal
      {...modalProps}
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
      <Form id="contact-form" autoComplete="off" onSubmit={handleSubmit}>
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
      <Modal.Footer className="p-0">
        <Button type="submit" form="contact-form" block className="m-0 p-3"><FontAwesomeIcon icon={faPaperPlane} /> Send</Button>
      </Modal.Footer>
    </Modal>
  );  
}

function MailResult(props) {
  if (props.show) {
    return (
      <Modal
        show={true}
        onHide={props.onHide}
        centered
        className="result-modal"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="col d-flex justify-content-between">
            <span>
              {props.show === 'sending'
                ? 'Sending...'
                : props.show === 'success'
                ? 'Your Message Has Been Sent!'
                : 'Sending Error!'}
              </span>
            <span onClick={props.onHide} className="clickable"><FontAwesomeIcon icon={faTimes} /></span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            {props.show === 'sending'
              ? ""
              : props.show === 'success'
              ? "Thanks for reaching out. I'll get back to you soon."
              : "Sorry for the inconveniece. Please try one of the other options to reach out."}
        </Modal.Footer>
      </Modal>
    );
  } else {
    return null;
  }
}