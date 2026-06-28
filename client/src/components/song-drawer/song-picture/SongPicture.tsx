import { Box, Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "@shared/playlistProps.ts";
import Styles from "./songPicture.style.ts";
import { FC } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const SongPicture: FC<PlaylistOverviewProps> = ({ name, avaterPicture, artist }) => (
  <>
    <Box sx={Styles.imgContainer}>
      <Box sx={Styles.songImg} component="img" src={avaterPicture} />
    </Box>
  </>
);

export default SongPicture;
