import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { expressStaticUrl } from '../../../utils/staticSideNavData';
import Heading from '../Heading/Heading';
// import Typewriter from '../Typewriter/Typewriter';
// import mainImg from '../../../assets/images/digi_5.jpg';

class ProjectDetails extends Component {
  state = {
    // imageSrc: pMainImg,
    // changeImgStatus: false
  };

  componentWillMount() {
    window.scrollTo(0, 0);
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
        <div className="projectwrapper">
          <div className="projectwrapper__topsection">
            <Link to="/projects" className="projectwrapper__topsection__back">
              <FontAwesomeIcon icon="arrow-left" />
              <span>back to projects</span>
            </Link>
            <Heading headingText={this.props.projectData.heading} />
            <p className="projectDesc">{this.props.projectData.shortDesc}</p>
            <div className="projectwrapper__topsection__moredetails">
              <ul>
                {this.props.projectData.client && (
                  <li>
                    <h3>Client</h3>
                    <p>{this.props.projectData.client}</p>
                  </li>
                )}
                <li>
                  <h3>Role</h3>
                  <p>{this.props.projectData.role}</p>
                </li>
                <li>
                  <h3>Date</h3>
                  <p>{this.props.projectData.date}</p>
                </li>
                <li>
                  <h3>Tech</h3>
                  <p>{this.props.projectData.tech}</p>
                </li>
              </ul>
            </div>
            {this.props.projectData.websiteUrl && (
              <div className="projectwrapper__topsection__visitsite">
                <a href={this.props.projectData.websiteUrl} className="primary-btn" target="_blank">
                  Visit The Website
                </a>
              </div>
            )}
          </div>
          <div className="projectwrapper__images">
            {this.props.projectData.images.map(image => (
              <img key={image} src={`${expressStaticUrl.url}${image}`} alt="" />
            ))}
          </div>
          <div className="projectwrapper__next-prev-projects">
            <Link to={`/projects/${this.props.prevProj}`} className="">
              <FontAwesomeIcon icon="arrow-left" />
              <span> Previous Project</span>
            </Link>
            <Link to={`/projects/${this.props.nextProj}`} className="">
              <span>Next Project </span>
              <FontAwesomeIcon icon="arrow-right" />
            </Link>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

ProjectDetails.propTypes = {
  projectData: PropTypes.object.isRequired,
  prevProj: PropTypes.string.isRequired,
  nextProj: PropTypes.string.isRequired
};

// ProjectDetails.defaultProps = {
//   history: ''
// };

export default withRouter(ProjectDetails);
