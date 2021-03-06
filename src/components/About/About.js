import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../Common/Heading/Heading';
import Typewriter from '../Common/Typewriter/Typewriter';
import ProgressiveImage from '../Common/ProgressiveImage/ProgressiveImage';

import { expressStaticUrl } from '../../utils/staticSideNavData';
import meImg from '../../assets/images/me_1.jpg';
import meImgLow from '../../assets/images/me_1_low.jpg';

class About extends Component {
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
      this.props.history.push('./skills');
    } else if (window.scrollY === 0 && event.deltaY < -30) {
      this.props.history.push('./home');
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
        <div className="aboutwrapper">
          <div className="aboutwrapper__leftsec">
            <Heading headingText="About Me" />
            <p className="aboutwrapper__leftsec-content">
              My passion for coding started around 3.8 years ago when i joined as a Trainee in an MNC in Chennai, Tamil
              Nadu (India). In May 2015, i joined cognizant as a Programmer Analyst in Kolkata, West Bengal (India)
              after i completed my training in web technologies. After working for 3 years there, i realized i need more
              exposure to different technologies and need career growth so i switched to Deloitte USI.
              <br /> <br /> When i am not coding, you will find me either traveling or playing different sports.
              <br /> <br />
              <Typewriter
                typeTxt="Some of the clients I have worked for include: Delta Airlines, Realogy Holdings Corp., XG
                Communities."
                idValue="clientsdata"
              />
            </p>
          </div>
          <div className="aboutwrapper__rightsec">
            {/* <img src={`${expressStaticUrl.url}me_1.f4ed6f65.jpg`} alt="" /> */}
            <ProgressiveImage
              piTinyImageSource={`${expressStaticUrl.url}${meImgLow}`}
              piMainImageSource={`${expressStaticUrl.url}${meImg}`}
              piAlt="Nitish Jain"
              piFilterEffect="blur(5px) grayscale(100%)"
              piWidth="auto"
            />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

About.propTypes = {
  history: PropTypes.object
};

About.defaultProps = {
  history: ''
};

export default withRouter(About);
