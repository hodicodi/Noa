import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "@shared/src/types/personalPlaylist.types.ts";
import Styles from "./PlaylistPicture.Style.ts";
import { FC } from "react";

const PlaylistPicture: FC<PlaylistOverviewProps> = ({ name, avaterPicture, artist }) => (
  <Box sx={Styles.playlistMainPreview}>
    <Box sx={Styles.imgContainer}>
      <Box sx={Styles.playlistImg} component="img" src={avaterPicture} />
    </Box>
    <Box>
      <Typography sx={Styles.playlistName} variant="h4">
        {name}
      </Typography>
      <Typography sx={Styles.artistName} variant="body2">
        {artist}
      </Typography>
    </Box>
  </Box>
);

export default PlaylistPicture;
