import {GOOGLE_MAPS_API_KEY} from '../../../Keys'

import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Grid from '@material-ui/core/Grid'
import VesselMarker from './VesselMarker'

const DEFAULT_ZOOM = 8

class Map extends Component {
  render () {
    const vesselMarker =
      <VesselMarker
        lat={this.props.mapCenter.lat}
        lng={this.props.mapCenter.lng}
        title={this.props.vessel.title} />

    return (
      <Grid item xs={12} style={{width: '100%', height: '100vh', position: 'absolute', left: '0', top: '0'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: GOOGLE_MAPS_API_KEY}}
          center={this.props.mapCenter}
          zoom={DEFAULT_ZOOM}
        >
          {this.props.vessel.show ? vesselMarker : null}
        </GoogleMapReact>
      </Grid>
    )
  }
}

export default Map
