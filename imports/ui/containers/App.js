import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import Grid from '@material-ui/core/Grid'
import { Vessels } from '../../api/vessels'

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

export default withTracker(() => {
  console.log('calling withTracker')
  return {
    vessels: Vessels.find({}).fetch()
  }
})(App)
