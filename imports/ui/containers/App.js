import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import InputCard from '../components/InputCard'
import Map from './Map'

class App extends Component {
  state = {
    mapCenter: {
      lat: 59.95,
      lng: 30.33
    }
  }

  onTargetVesselSelect = (id) => {
    // TODO: fetch coordinates from api and update state
  }

  render () {
    return (
      <Grid container justify='center'>
        <InputCard onTargetVesselSelect={this.onTargetVesselSelect} />
        <Map mapCenter={this.state.mapCenter}/>
      </Grid>
    )
  }
}

export default App
// TODO: remove 'withtracker()' from packages
