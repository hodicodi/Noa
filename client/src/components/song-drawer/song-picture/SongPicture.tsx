import { Box } from "@mui/material";
import { PlaylistOverviewProps } from "@shared/playlistProps.ts";
import { FC } from "react";
import Styles from "./songPicture.style.ts";

const SongPicture: FC<PlaylistOverviewProps> = ({ name, avaterPicture, artist }) => (
  <Box sx={Styles.imgContainer}>
    <Box sx={Styles.songImg} component="img" src={avaterPicture} />
  </Box>
);

export default SongPicture;
