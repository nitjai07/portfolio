import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Typewriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ind: 0,
      speed: 70
    };
  }

  componentDidMount() {
    this.typeWriter();
  }

  componentWillUnmount() {
    clearInterval(this.testInt);
  }

  typeWriter = () => {
    if (this.state.ind < this.props.typeTxt.length) {
      document.getElementById(this.props.idValue).innerHTML += this.props.typeTxt.charAt(this.state.ind);
      this.setState(prevState => ({
        ind: prevState.ind + 1
      }));
      this.testInt = setTimeout(this.typeWriter, this.state.speed);
    }
  };

  render() {
    return <span id={this.props.idValue} />;
  }
}

Typewriter.propTypes = {
  typeTxt: PropTypes.string.isRequired,
  idValue: PropTypes.string.isRequired
};

export default Typewriter;
