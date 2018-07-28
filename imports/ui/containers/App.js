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

  onTargetVesselSelect = (id) => Meteor.call('getVesselCoordinates',id , (e, r) => this.onDataFetched(e, r))

  onDataFetched = (error, result) => {
    if (error) {
      console.log('error: ', error)
    } else {
      console.log('result: ', result)
    }
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
