import { Grid, Typography } from '@mui/material';

const Lives = (props) => {
    let rerolls = [];
    for(let i =0; i < props.rerolls; i++){
        rerolls.push(<Typography>♻️</Typography>)
    }
  return (
    <Grid container>
        <Typography>Rerolls:</Typography>
        
        {rerolls}
      
    </Grid> 
  )
}

export default Lives