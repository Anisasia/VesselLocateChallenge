import {GOOGLE_MAPS_API_KEY} from '../../../Keys'

import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Grid from '@material-ui/core/Grid'

const AnyReactComponent = ({ text }) => <div>{text}</div>
const DEFAULT_ZOOM = 11

class Map extends Component {
  render () {
    return (
      <Grid item xs={12} style={{width: '100%', height: '100vh', position: 'absolute', left: '0', top: '0'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: GOOGLE_MAPS_API_KEY}}
          center={this.props.mapCenter}
          zoom={DEFAULT_ZOOM}
        >
          <AnyReactComponent
            lat={this.props.mapCenter.lat}
            lng={this.props.mapCenter.lng}
            text={'Test'}
          />
        </GoogleMapReact>
      </Grid>
    )
  }
}

export default Map
