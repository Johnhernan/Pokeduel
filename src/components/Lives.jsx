import { Typography, Grid } from '@mui/material';
import React from 'react';

const Lives = (props) => {
    let lives = [];
    for(let i =0; i < props.lives; i++){
        lives.push(<Typography>🖤</Typography>)
    }
  return (
    <Grid container>
        <Typography>Lives:</Typography>
        {lives}
    </Grid> 
  )
}

export default Lives
//sx={{display: "flex", alignItems: "baseline"}}