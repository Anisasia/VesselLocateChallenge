import {GOOGLE_MAPS_API_KEY} from '../../../Keys'

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Grid from '@material-ui/core/Grid';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <Grid item xs={12} style={{ height: '100vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </Grid>
    );
  }
}

export default SimpleMap;