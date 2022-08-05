import { Box, Typography } from '@mui/material';
import React from 'react'

const Lives = (props) => {
    let lives = [];
    for(let i =0; i < props.lives; i++){
        lives.push(<Typography>🖤</Typography>)
    }
  return (
    <Box sx={{display: "flex", alignItems: "baseline", padding: "0"}}>
        <Typography>Lives:</Typography>
        {lives}
    </Box> 
  )
}

export default Lives