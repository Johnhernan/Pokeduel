import { Box, Avatar, Typography } from "@mui/material";
import PlayerStats from "./PlayerStats";
const Pokemon = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "7rem",
      }}
    >
      <Avatar src={props.sprite} sizes="50px " />
      <Typography>{props.species ? props.species : "???"}</Typography>

      <Typography>Type 1:{props.type ? props.type : "None"} </Typography>
      <Typography>
        Type 2:{props.typeSecondary ? props.typeSecondary : "None"}
      </Typography>
      <PlayerStats lives={props.lives} rerolls={props.rerolls} />
    </Box>
  );
};

export default Pokemon;
