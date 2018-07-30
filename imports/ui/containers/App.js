import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import CustomizedSnackbar from '../components/CustomizedSnackbar'
import InputCard from '../components/InputCard'
import Map from '../components/Map'

class App extends Component {
  state = {
    showSnackbar: false,
    snackbarMessage: '',
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
      this.setState({
        showSnackbar: true,
        snackbarMessage: error.reason
      })
    } else {
      this.setState({
        mapCenter: result.coordinates,
        vessel: {show: true, title: result.vessel.title}
      })
    }
  }

  onSnackbarClose = (event, reason) => {
    console.log('reason', reason)
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ showSnackbar: false });
  };


  render () {
    return (
      <Grid container justify='center'>
        <CustomizedSnackbar open={this.state.showSnackbar} 
                            message={this.state.snackbarMessage}
                            onClose={(e, r) => this.onSnackbarClose(e, r)}/>
        <InputCard onTargetVesselSelect={this.onTargetVesselSelect} />
        <Map mapCenter={this.state.mapCenter} vessel={this.state.vessel}/>
      </Grid>
    )
  }
}

export default App
