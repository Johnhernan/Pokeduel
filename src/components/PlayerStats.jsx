import { Box, Typography } from "@mui/material";

const PlayerStats = (props) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>Lives</Typography>
      <Box>
        
      </Box>
      <Typography>Rerolls</Typography>
      <Box>
        
      </Box>
    </Box>
  );
};
export default PlayerStats;
