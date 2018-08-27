import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Heading from '../Common/Heading/Heading';
import Typewriter from '../Common/Typewriter/Typewriter';
// import meImg from '../../assets/images/me_2.jpg';

class Home extends Component {
  componentDidMount() {
    window.addEventListener('mousewheel', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleScroll);
  }

  handleScroll = event => {
    if (event.deltaY > 30 && window.innerHeight + window.scrollY >= document.body.offsetHeight + 99) {
      this.props.history.push('/about');
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
        <div className="homewrap">
          <div className="homewrap__leftsec">
            <Heading
              headingText={`Hi,<br /> I'm <span class='initial-shadow'>${this.props.firstName.charAt(
                0
              )}</span>${this.props.firstName.substr(1)} 
              ${this.props.lastName} <br />Web Developer.`}
            />
            <p>
              <Typewriter idValue="jobType" typeTxt="Full Stack Developer | Angular | React | Node | Mongo DB" />
            </p>
            <Link to="/contact" className="primary-btn">
              Contact Me
            </Link>
          </div>
          {/* <div className="homewrap__rightsec">
            <img src={meImg} alt="" />
          </div> */}
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Home.propTypes = {
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  history: PropTypes.object.isRequired
};

Home.defaultProps = {
  lastName: 'Jain',
  firstName: 'Nitish'
};

export default withRouter(Home);
