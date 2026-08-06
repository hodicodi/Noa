import { Box, Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "@shared/src/types/personalPlaylist.types.ts";
import Styles from "./songInfo.style.ts";
import { FC } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { SongOverviewProps } from "@shared/src/types/song.types.ts";
import { useGlobalDrawer } from "../DrawerContext.tsx";

const SongInfo: FC = () => {
  const { currentSong, currentAlbum } = useGlobalDrawer();

  return (
    <Card sx={Styles.card}>
      <Box>
        <CardContent sx={Styles.cardContent}>
          <Box>
            <Typography sx={Styles.songName} variant="h6" component="div">
              {currentSong.name}
            </Typography>
            <Typography sx={Styles.artistName} variant="body2" component="div">
              {currentAlbum.artist.name}
            </Typography>
          </Box>
          <IconButton sx={Styles.plusIcon} color="inherit" aria-label="your action">
            <ControlPointIcon fontSize="large" />
          </IconButton>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SongInfo;
