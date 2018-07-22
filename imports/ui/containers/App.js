import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';

import InputCard from '../components/InputCard'

class App extends Component {
  render () {
    return (
      <Grid container justify="center">
        <InputCard/>
      </Grid>
    )
  }
}

export default App;