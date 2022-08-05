import { Box, Avatar, Typography } from "@mui/material";
import Lives from "./Lives";
import Rerolls from "./Rerolls";

const Pokemon = (props) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignContent: "center", padding: "1.25rem 1.50rem",}}>
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: "2rem",
          alignItems: "center",
          gap: "5px",
          background: "darkgrey",
        }}
      >
        <Avatar src={props.sprite? props.sprite : "images/question_mark.png"} sx={{width:"100px", height: "100px"}} />
        <Typography>{props.species ? ` ${props.species}` : "???"}</Typography>

        <Typography>Type 1:{props.type ? ` ${props.type}` : " None"} </Typography>
        <Typography>
          Type 2:{props.typeSecondary ? ` ${props.typeSecondary}` : " None"}
        </Typography>
        <Lives lives={props.lives}/> 
        <Rerolls rerolls={props.rerolls}/>
        
      </Box>
    </div>
  );
};

export default Pokemon;
