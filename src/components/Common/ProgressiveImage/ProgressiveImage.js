import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressiveImage extends Component {
  state = {
    piTinyImageSource: this.props.piTinyImageSource,
    imgLoaded: false
  };

  componentDidMount() {
    this.PreloadImage(this.props.piMainImageSource);
  }

  PreloadImage = src => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      this.setState((prevState, props) => ({
        piTinyImageSource: props.piMainImageSource,
        imgLoaded: true
      }));
    };
  };

  render() {
    return (
      <img
        style={this.state.imgLoaded ? {} : { filter: this.props.piFilterEffect }}
        height={this.props.piHeight}
        width={this.props.piWidth}
        className={`${this.props.customClass}`}
        src={this.state.piTinyImageSource}
        alt={this.props.piAlt}
      />
    );
  }
}

ProgressiveImage.propTypes = {
  piTinyImageSource: PropTypes.string.isRequired,
  piMainImageSource: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  piAlt: PropTypes.string,
  piHeight: PropTypes.string,
  piWidth: PropTypes.string,
  piFilterEffect: PropTypes.string
};
ProgressiveImage.defaultProps = {
  customClass: '',
  piAlt: '',
  piHeight: '100%',
  piWidth: '100%',
  piFilterEffect: ''
};

export default ProgressiveImage;
