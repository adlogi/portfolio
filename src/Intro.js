import React, { Component } from 'react'
import './Intro.css';

export default class Intro extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-12 align-self-center">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="myName">
                  <span className="typed-text"></span><span className="circle"></span><span className="cursor">&nbsp;</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <p>
                  <span className="typed-text"></span><span className="cursor">&nbsp;</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <p className="tech">
                  <span className="typed-text"></span><span className="cursor">&nbsp;</span>
                </p>
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
      ['Front End Developer'],
      ['HTML', 'CSS', 'JavaScript', 'ReactJS']
    ];

    const typedTexts = document.querySelectorAll('.typed-text');
    const cursorSpans = document.querySelectorAll('.cursor');
    const exitCircle = document.querySelector('.circle');

    const initialDelay = 2000;
    const typingDelay = 150;
    const erasingDelay = 75;
    const newTextDelay = 1000; // Delay between current and next text

    function type(charIndex, text, typedElement, cursorSpan, remainingText = []) {
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
        setTimeout(type, typingDelay, charIndex + 1, text, typedElement, cursorSpan, remainingText);
      } else {
        if (remainingText.length > 0) {
          cursorSpan.classList.remove("typing");
          setTimeout(erase, newTextDelay, charIndex, text, typedElement, cursorSpan, remainingText);
        } else {
          cursorSpan.style.visibility = 'hidden';
        }
      }
    }

    function erase(charIndex, text, typedElement, cursorSpan, remainingText = []) {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
          cursorSpan.classList.add('typing');
        }
        typedElement.textContent = text.substring(0, charIndex-1);
        setTimeout(erase, erasingDelay, charIndex - 1, text, typedElement, cursorSpan, remainingText);
      } else {
        cursorSpan.classList.remove("typing");
        if (remainingText.length > 0) {
          setTimeout(type, newTextDelay, 0, remainingText[0], typedElement, cursorSpan, remainingText.slice(1));
        }
      }
    }

    // Show cursor on the first line
    cursorSpans[0].style.visibility = 'visible';
    // Type the first line
    let delay = initialDelay;
    setTimeout(type, delay, 0, lines[0][0], typedTexts[0], cursorSpans[0]);

    // Show cursor on the second line
    delay += typingDelay * lines[0][0].length;
    setTimeout(() => {cursorSpans[1].style.visibility = 'visible'}, delay);
    // Type the second time
    delay += newTextDelay;
    setTimeout(type, delay, 0, lines[1][0], typedTexts[1], cursorSpans[1]);

    // Show cursor on the third line
    delay += typingDelay * lines[1][0].length;
    setTimeout(() => {cursorSpans[2].style.visibility = 'visible'}, delay);
    // Type the third line
    delay += newTextDelay;
    setTimeout(type, delay, 0, lines[2][0], typedTexts[2], cursorSpans[2], lines[2].slice(1));

    // Start exit animation
    delay += lines[2].reduce((memo, curr) => memo + curr.length, 0) * (typingDelay + erasingDelay) + (lines[2].length + 2) * (newTextDelay);
    setTimeout(() => {
      exitCircle.style.visibility = 'visible';
      exitCircle.style.animation = 'animate 2s ease-in forwards';
    }, delay);

    // Show HomePage
    delay += 3000;
    setTimeout(this.props.showHome, delay);
  }
}
