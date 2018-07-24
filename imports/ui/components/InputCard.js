import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AutosuggestInput from '../containers/AutosuggestInput'

const inputCard = () => {
  return (
    <Grid item xs={12} sm={8} md={6} lg={4} style={{zIndex: 500}}>
      <Paper style={{padding: '16px', marginTop: '16px'}}>
        <AutosuggestInput />
      </Paper>
    </Grid>
  )
}

export default inputCard
