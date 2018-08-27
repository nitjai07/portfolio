import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => <h1 className="commonheading" dangerouslySetInnerHTML={{ __html: props.headingText }} />;

Heading.propTypes = {
  headingText: PropTypes.string.isRequired
};

export default Heading;
