import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { SideBarLinks } from '../../utils/staticSideNavData';

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // sideNavProjectState: true
    };
  }

  render() {
    return (
      <div className="sidenav">
        <NavLink to="/home" className="sidenav__logo">
          <span className="initial-shadow">{this.props.firstName.charAt(0)}</span>
          <span>{this.props.firstName}</span>
        </NavLink>
        <nav className="sidenav__bar">
          {SideBarLinks.components.map(link => (
            <NavLink activeClassName="active" key={link.label} className="sidenav__bar__link" to={link.path}>
              <span>{link.label}</span>
              <FontAwesomeIcon icon={link.icon} />
            </NavLink>
          ))}
        </nav>
        <ul className="sidenav__sociallist">
          {SideBarLinks.social.map(link => (
            <a key={link.icon} href={link.path} target="_blank">
              <li>
                <FontAwesomeIcon icon={['fab', link.icon]} />
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

SideNav.propTypes = {
  firstName: PropTypes.string
};

SideNav.defaultProps = {
  firstName: 'Nitish'
};

export default withRouter(SideNav);
