import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import ProjectDetails from '../Common/ProjectDetails/ProjectDetails';

import { ProjectData } from '../../utils/staticProjectData';

class Realogy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // hoverLink: ''
    };
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
        <ProjectDetails projectData={ProjectData.RCB} prevProj="digi-banking" nextProj="delta-vacations" />
      </ReactCSSTransitionGroup>
    );
  }
}

export default Realogy;
