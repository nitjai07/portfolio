import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import ProjectDetails from '../Common/ProjectDetails/ProjectDetails';

import { ProjectData } from '../../utils/staticProjectData';

class SiteSelex extends Component {
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
        <ProjectDetails projectData={ProjectData.SS} prevProj="deal-no-deal" nextProj="sales-direct" />
      </ReactCSSTransitionGroup>
    );
  }
}

export default SiteSelex;
