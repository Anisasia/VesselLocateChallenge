import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const inputCard = () => {
  return(
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <Paper style={{padding: "16px", margin: "8px", marginTop: "16px"}}>
        <TextField placeholder="Enter a vessel name" style={{width: "100%"}}/>
      </Paper>
    </Grid>
  );
}

export default inputCard;