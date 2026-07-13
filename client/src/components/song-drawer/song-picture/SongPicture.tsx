import { Box } from "@mui/material";
import { SongOverviewProps } from "@shared/src/types/song.types.ts";
import { FC } from "react";
import Styles from "./songPicture.style.ts";

const SongPicture: FC<SongOverviewProps> = ({ name, avaterPicture, artistName }) => (
  <Box sx={Styles.imgContainer}>
    <Box sx={Styles.songImg} component="img" src={avaterPicture} />
  </Box>
);

export default SongPicture;
