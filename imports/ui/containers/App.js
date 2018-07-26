import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import InputCard from '../components/InputCard'
import Map from './Map'

class App extends Component {
  render () {
    return (
      <Grid container justify='center'>
        <InputCard vessels={this.props.vessels} />
        <Map />
      </Grid>
    )
  }
}

export default App
// TODO: remove 'withtracker()' from packages
