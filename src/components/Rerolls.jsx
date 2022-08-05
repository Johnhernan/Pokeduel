import { Box, Typography } from '@mui/material';
import React from 'react'

const Lives = (props) => {
    let rerolls = [];
    for(let i =0; i < props.rerolls; i++){
        rerolls.push(<Typography>♻️</Typography>)
    }
  return (
    <Box sx={{display: "flex", alignItems: "baseline", padding: "0"}}>
        <Typography>Rerolls:</Typography>
        <Box sx={{display: "flex"}}>
        {rerolls}
        </Box>
    </Box> 
  )
}

export default Lives