import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import InputCard from '../components/InputCard'
import Map from './Map'

class App extends Component {
  state = {
    mapCenter: { // Bellevue Downtown Park
      lat: 47.612684,
      lng: -122.204169
    },
    vessel: {
      show: false,
      title: ''
    }
  }

  onTargetVesselSelect = (id) => Meteor.call('getVesselInfo',id , (e, r) => this.onDataFetched(e, r))

  onDataFetched = (error, result) => {
    if (error) {
      console.log('error: ', error)
    } else {
      this.setState({
        mapCenter: result.coordinates,
        vessel: {show: true, title: result.vessel.title}
      })
    }
}

  render () {
    return (
      <Grid container justify='center'>
        <InputCard onTargetVesselSelect={this.onTargetVesselSelect} />
        <Map mapCenter={this.state.mapCenter} vessel={this.state.vessel}/>
      </Grid>
    )
  }
}

export default App
// TODO: remove 'withtracker()' from packages
