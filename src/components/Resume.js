import React, { Component } from 'react';
import SideMenu from './SideMenu';

export default class Resume extends Component {
  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row h-100">
          <div id="side-menu-container" className="col-md-4 col-lg-3 align-self-center">
            <SideMenu selected='resume' />
          </div>
          <div className="offset-md-4 col-md-8 offset-lg-3 col-lg-9 flex-grow-1 my-5">
            <div className="row align-items-center h-100">
              <div className="col px-5">
                <nav>
                  <ul className="nav nav-tabs nav-fill nav-primary" id="nav-tabs" role="tablist">
                    <li className="nav-item nav-link active" id="nav-summary-tab" data-toggle="tab" role="tab" aria-controls="nav-summary" aria-selected="true">Summary</li>
                    <li className="nav-item nav-link" id="nav-experience-tab" data-toggle="tab" role="tab" aria-controls="nav-experience" aria-selected="false">Technical Experience</li>
                    <li className="nav-item nav-link" id="nav-skills-tab" data-toggle="tab" role="tab" aria-controls="nav-skills" aria-selected="false">Technical Skills</li>
                    <li className="nav-item nav-link" id="nav-work-tab" data-toggle="tab" role="tab" aria-controls="nav-work" aria-selected="false">Work Experience</li>
                    <li className="nav-item nav-link" id="nav-education-tab" data-toggle="tab" role="tab" aria-controls="nav-education" aria-selected="false">Education</li>
                  </ul>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-summary" role="tabpanel" aria-labelledby="nav-summary-tab">
                    <p className="mb-0">SM in Media Arts & Sciences, MIT (2014)</p>
                    <small className="text-muted">Lifelong Kindergarten group</small>
                    <p className="my-2">BS in Computer Engineering, Damascus University (2009)</p>
                  </div>
                  <div className="tab-pane fade" id="nav-experience" role="tabpanel" aria-labelledby="nav-experience-tab">Technical Experience</div>
                  <div className="tab-pane fade" id="nav-skills" role="tabpanel" aria-labelledby="nav-skills-tab">Technical Skills</div>
                  <div className="tab-pane fade" id="nav-work" role="tabpanel" aria-labelledby="nav-work-tab">Work Experience</div>
                  <div className="tab-pane fade" id="nav-education" role="tabpanel" aria-labelledby="nav-education-tab">Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const navTabs = document.querySelectorAll('#nav-tabs > .nav-item');
    const tabPanes = document.querySelectorAll('#nav-tabContent > .tab-pane');
    navTabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        for (let i = 0; i < navTabs.length; i++) {
          navTabs[i].classList.remove('active');
          navTabs[i].setAttribute("aria-selected", false);
          tabPanes[i].classList.remove('active', 'show');
        }
        
        const currentTab = event.target;
        currentTab.classList.add('active');
        currentTab.setAttribute("aria-selected", true);
        const currentPane = document.querySelector(`#${currentTab.id.slice(0, -4)}`);
        currentPane.classList.add('active', 'show');
      })
    });
  }
}
