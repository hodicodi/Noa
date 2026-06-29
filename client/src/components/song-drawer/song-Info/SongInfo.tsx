import { Box, Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "@shared/playlistProps.ts";
import Styles from "./songInfo.style.ts";
import { FC } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const SongInfo: FC<PlaylistOverviewProps> = ({ name, avaterPicture, artist }) => (
  <Card sx={Styles.card}>
    <Box>
      <CardContent sx={Styles.cardContent}>
        <Box>
          <Typography sx={Styles.songName} variant="h6" component="div">
            {"Nahman"}
          </Typography>
          <Typography sx={Styles.artistName} variant="body2" component="div">
            {"Amgosha"}
          </Typography>
        </Box>
        <IconButton sx={Styles.plusIcon} color="inherit" aria-label="your action">
          <ControlPointIcon fontSize="large" />
        </IconButton>
      </CardContent>
    </Box>
  </Card>
);

export default SongInfo;
