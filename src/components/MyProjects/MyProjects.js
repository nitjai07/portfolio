import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import pMainImg from '../../assets/images/projects_main.jpg';
import digi1 from '../../assets/images/digi_1.jpg';
import SD1 from '../../assets/images/SD_1.jpg';
import DA1 from '../../assets/images/DA_1.jpg';
import SS1 from '../../assets/images/SS_1.jpg';
import CB_1 from '../../assets/images/realogy_cb_2.jpg';
import dnd from '../../assets/images/dnd_1.jpg';

class MyProjects extends Component {
  state = {
    imageSrc: pMainImg,
    changeImgStatus: false
  };

  componentDidMount() {
    this.mouseTimer = setTimeout(() => {
      window.addEventListener('mousewheel', this.handleScroll);
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleScroll);
    clearTimeout(this.changeImgTO, this.mouseTimer);
  }

  handleScroll = event => {
    if (event.deltaY > 30 && window.innerHeight + window.scrollY >= document.body.offsetHeight + 99) {
      this.props.history.push('./contact');
    } else if (window.scrollY === 0 && event.deltaY < -30) {
      this.props.history.push('./skills');
    }
  };

  changeImage = abc => {
    this.setState({
      changeImgStatus: true
    });

    this.changeImgTO = setTimeout(() => {
      this.setState({
        changeImgStatus: false,
        imageSrc: abc
      });
    }, 500);
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
        <div className="projectswrapper">
          <ul>
            <li>
              <Link className="projectlink" to="/projects/site-selex" onMouseEnter={() => this.changeImage(SS1)}>
                <span>Site Selex</span>
                <span>Responsive Web App - Angular</span>
              </Link>
            </li>
            <li>
              <Link className="projectlink" to="/projects/sales-direct" onMouseEnter={() => this.changeImage(SD1)}>
                <span>Sales Direct</span>
                <span>Responsive Web App - React</span>
              </Link>
            </li>
            <li>
              <Link className="projectlink" to="/projects/digi-banking" onMouseEnter={() => this.changeImage(digi1)}>
                <span>Digi Banking</span>
                <span>Mobile Application - MEAN</span>
              </Link>
            </li>
            <li>
              <Link className="projectlink" to="/projects/realogy" onMouseEnter={() => this.changeImage(CB_1)}>
                <span>Realogy ERA</span>
                <span>Responsive Web App - Angular</span>
              </Link>
            </li>
            <li>
              <Link className="projectlink" to="/projects/delta-vacations" onMouseEnter={() => this.changeImage(DA1)}>
                <span>Delta Vacations</span>
                <span>Desktop App - JQuery</span>
              </Link>
            </li>
            <li>
              <Link className="projectlink" to="/projects/deal-no-deal" onMouseEnter={() => this.changeImage(dnd)}>
                <span>Deal or No Deal</span>
                <span>Desktop Game - Javascript</span>
              </Link>
            </li>
          </ul>
          <div className="projectImage">
            <img className={this.state.changeImgStatus ? 'imgAnimate' : ''} src={this.state.imageSrc} alt="" />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

MyProjects.propTypes = {
  history: PropTypes.object
};

MyProjects.defaultProps = {
  history: ''
};

export default withRouter(MyProjects);
