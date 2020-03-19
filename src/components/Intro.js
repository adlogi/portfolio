import React, { Component } from 'react'
import '../style/Intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.timers = [];
  }

  render() {
    return (
      <div id='intro' className="container-fluid">
        <div className="row h-100">
          <div className="col-12 align-self-center">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="long-name">
                  <span className="typed-text"></span><span className="circle"></span><span className="cursor">&nbsp;</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <p className="intro">
                  <span className="typed-text"></span><span className="cursor">&nbsp;</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <p className="tech intro">
                  <span className="typed-text"></span><span className="cursor">&nbsp;</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 fixed-bottom text-center">
                <button className="btn" type="button" onClick={this.props.showHome}>
                  <FontAwesomeIcon icon={faForward} /> Skip Intro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const lines = [
      ['Abdulrahman Y. idlbi)'],
      ['Front-End Developer'],
      ['HTML', 'CSS', 'JavaScript', 'ReactJS']
    ];

    const typedTexts = document.querySelectorAll('.typed-text');
    const cursorSpans = document.querySelectorAll('.cursor');
    const exitCircle = document.querySelector('.circle');

    const initialDelay = 2000;
    const typingDelay = 150;
    const erasingDelay = 75;
    const newTextDelay = 1000; // Delay between current and next text

    const type = (charIndex, text, typedElement, cursorSpan, remainingText = []) => {
      cursorSpan.style.visibility = 'visible'
      if (charIndex < text.length) {
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing");
        }
        switch (text[charIndex]) {
          case '.':
            typedElement.innerHTML += '<span class="colored">.</span>';
            break;
          case ')':
            typedElement.innerHTML += '<span class="smile colored">)</span>';
            break;
          default:
            typedElement.innerHTML += text[charIndex];
            break;
        }
        this.timers.push(setTimeout(type, typingDelay, charIndex + 1, text, typedElement, cursorSpan, remainingText));
      } else {
        if (remainingText.length > 0) {
          cursorSpan.classList.remove("typing");
          this.timers.push(setTimeout(erase, newTextDelay, charIndex, text, typedElement, cursorSpan, remainingText));
        } else {
          cursorSpan.style.visibility = 'hidden';
        }
      }
    }

    const erase = (charIndex, text, typedElement, cursorSpan, remainingText = []) => {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
          cursorSpan.classList.add('typing');
        }
        typedElement.textContent = text.substring(0, charIndex-1);
        this.timers.push(setTimeout(erase, erasingDelay, charIndex - 1, text, typedElement, cursorSpan, remainingText));
      } else {
        cursorSpan.classList.remove("typing");
        if (remainingText.length > 0) {
          this.timers.push(setTimeout(type, newTextDelay, 0, remainingText[0], typedElement, cursorSpan, remainingText.slice(1)));
        }
      }
    }

    // Show cursor on the first line
    cursorSpans[0].style.visibility = 'visible';
    // Type the first line
    let delay = initialDelay;
    this.timers.push(setTimeout(type, delay, 0, lines[0][0], typedTexts[0], cursorSpans[0]));

    // Show cursor on the second line
    delay += typingDelay * lines[0][0].length;
    this.timers.push(setTimeout(() => {cursorSpans[1].style.visibility = 'visible'}, delay));
    // Type the second time
    delay += newTextDelay;
    this.timers.push(setTimeout(type, delay, 0, lines[1][0], typedTexts[1], cursorSpans[1]));

    // Show cursor on the third line
    delay += typingDelay * lines[1][0].length;
    this.timers.push(setTimeout(() => {cursorSpans[2].style.visibility = 'visible'}, delay));
    // Type the third line
    delay += newTextDelay;
    this.timers.push(setTimeout(type, delay, 0, lines[2][0], typedTexts[2], cursorSpans[2], lines[2].slice(1)));

    // Start exit animation
    delay += lines[2].reduce((memo, curr) => memo + curr.length, 0) * (typingDelay + erasingDelay) + (lines[2].length + 2) * (newTextDelay);
    this.timers.push(setTimeout(() => {
      exitCircle.style.visibility = 'visible';
      exitCircle.style.animation = 'animate 1s ease-in forwards';
      document.querySelector('#intro').classList.add('fade-out');
    }, delay));

    // Show HomePage
    delay += 1000;
    this.timers.push(setTimeout(this.props.showHome, delay));
  }

  componentWillUnmount() {
    this.timers.forEach(timer => {clearTimeout(timer);});
  }
}
