import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { ProjectData } from '../../utils/staticProjectData';
import ProjectDetails from '../Common/ProjectDetails/ProjectDetails';

class DealNDeal extends Component {
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
        <ProjectDetails projectData={ProjectData.DnD} prevProj="delta-vacations" nextProj="site-selex" />
      </ReactCSSTransitionGroup>
    );
  }
}

export default DealNDeal;
