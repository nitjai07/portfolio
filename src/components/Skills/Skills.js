import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Heading from '../Common/Heading/Heading';
// import meImgLow from '../../assets/images/me_1_low.jpg';

class Skills extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('mousewheel', this.handleScroll);
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleScroll);
  }

  handleScroll = event => {
    if (event.deltaY > 30 && window.innerHeight + window.scrollY >= document.body.offsetHeight + 99) {
      this.props.history.push('./projects');
    } else if (window.scrollY === 0 && event.deltaY < -30) {
      this.props.history.push('./about');
    }
  };

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={100}
        transitionName="loadComponent"
      >
        <div className="skillswrapper">
          <div className="skillswrapper__leftsec">
            <Heading headingText="Skills & Experience" />
            <p className="skillswrapper__content">
              Main area of my expertise is front end development and everything related with this side of web. Mainly i
              work on HTML, CSS, Javascript, Angular JS, SASS. I like working on projects from scratch and have good end
              to end development understanding.
              <br /> <br /> I have also some expertise with Node.js, Mongo DB and React.
              <br /> <br /> Would like to know more?
              <br /> Please check my&nbsp;
              <a href="https://www.linkedin.com/in/nitish-jain-59b59a35/" className="linkdefault" target="blank">
                LinkedIn
              </a>
              &nbsp;profile or just&nbsp;
              <Link to="/contact" className="linkdefault">
                Contact
              </Link>
              &nbsp;me.
            </p>
          </div>
          <div className="stage">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={['fab', 'react']} />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={['fab', 'angular']} />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={['fab', 'sass']} />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={['fab', 'html5']} />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={['fab', 'node']} />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={['fab', 'accessible-icon']} />
              </div>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Skills.propTypes = {
  history: PropTypes.object
};

Skills.defaultProps = {
  history: ''
};

export default withRouter(Skills);
