import { Grid, Avatar, Typography } from "@mui/material";
import Lives from "./Lives";
import Rerolls from "./Rerolls";

const Pokemon = (props) => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      gap="5px"
      sx={{
          padding: "2rem",
          background: "#413F42",
          borderRadius: "5px"
      }}>
        <Avatar src={props.sprite? props.sprite : "images/question_mark.png"} sx={{width:"100px", height: "100px"}} />
        <Typography>{props.species ? ` ${props.species}` : "???"}</Typography>

        <Typography>Type 1:{props.type ? ` ${props.type}` : " None"} </Typography>
        <Typography>
          Type 2:{props.typeSecondary ? ` ${props.typeSecondary}` : " None"}
        </Typography>
        <Lives lives={props.lives}/> 
        <Rerolls rerolls={props.rerolls}/>
        
    </Grid>
  );
};

export default Pokemon;
