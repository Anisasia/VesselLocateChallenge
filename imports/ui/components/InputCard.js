import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AutosuggestInput from './AutosuggestInput'

const inputCard = (props) => {
  return (
    <Grid item xs={12} sm={8} md={6} lg={4} style={{zIndex: 500}}>
      <Paper style={{padding: '16px', margin: '16px 4px'}}>
        <AutosuggestInput onTargetVesselSelect={props.onTargetVesselSelect} />
      </Paper>
    </Grid>
  )
}

export default inputCard
