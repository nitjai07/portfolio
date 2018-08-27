import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import Typewriter from '../Typewriter/Typewriter';

const AnyReactComponent = () => (
  <div className="mapOverText">
    Nitish Jain <br />
    Aishwarya Opulance Apartment, Marathahalli <br />
    Bangalore- 560037 <br /> <br />
    <span>@ </span>
    <a href="mailto:nitishjain2224@gmail.com" className="linkdefault" target="_top">
      <Typewriter idValue="mainOnMap" typeTxt="nitishjain2224@gmail.com" />
    </a>
  </div>
);

function SimpleMap(props) {
  return (
    // Important! Always set the container height explicitly
    <div className={props.customClass}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAKIRNlT44mTTMRaL0Wm3npkMf-Deyasjw' }}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent lat={props.latitude} lng={props.longitude} />
      </GoogleMapReact>
    </div>
  );
}

SimpleMap.propTypes = {
  customClass: PropTypes.string,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number
};

SimpleMap.defaultProps = {
  customClass: '',
  zoom: 8
};

export default SimpleMap;
