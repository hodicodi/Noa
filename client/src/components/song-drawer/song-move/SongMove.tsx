import { Box, Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "@shared/playlistProps.ts";
import Styles from "./songMove.style.ts";
import { FC } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const SongMove: FC = () => (
  <>
    <Box sx={Styles.songInfoContainer} />
      <Box sx = {Styles.box}>
        <CardContent sx={Styles.cardContent}>
          <IconButton sx={Styles.moveIcon}  color="inherit" aria-label="your action">
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton sx={Styles.plusIcon} style={{ marginLeft: "auto" }} color="inherit" aria-label="your action">
            <PlayArrowIcon fontSize="large" />
          </IconButton>
          <IconButton sx={Styles.moveIcon} style={{ marginLeft: "auto" }} color="inherit" aria-label="your action">
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </CardContent>
      </Box>
    <Box />
  </>
);

export default SongMove;
