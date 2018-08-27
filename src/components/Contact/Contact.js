import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../Common/Heading/Heading';
import GMap from '../Common/GMap/GMap';
// import Typewriter from '../Common/Typewriter/Typewriter';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('mousewheel', this.handleScroll);
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY === 0 && event.deltaY < -30) {
      this.props.history.push('./projects');
    }
  };

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={100}
        transitionName="loadComponent"
      >
        <div className="contactswrapper">
          <Heading headingText="Contact Me" />
          <form className="form">
            <div className="form__form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                placeholder="name"
                name="name"
                autoComplete="off"
                id="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <span className="border-on-hover" />
            </div>
            <div className="form__form-group">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="text"
                placeholder="email"
                autoComplete="off"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <span className="border-on-hover" />
            </div>
            <div className="form__form-group w-96">
              {/* <label htmlFor="subject">Subject</label> */}
              <input
                type="text"
                placeholder="subject"
                autoComplete="off"
                name="subject"
                id="subject"
                value={this.state.subject}
                onChange={this.handleInputChange}
              />
              <span className="border-on-hover" />
            </div>
            <div className="form__form-group w-96">
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                rows="4"
                placeholder="message"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
              />
              <span className="border-on-hover" />
            </div>
            <input type="button" value="Submit" className="primary-btn" />
          </form>
          <GMap customClass="contact-map" latitude={12.953845} longitude={77.699909} zoom={10} />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Contact.propTypes = {
  history: PropTypes.object
};

Contact.defaultProps = {
  history: ''
};

export default withRouter(Contact);
