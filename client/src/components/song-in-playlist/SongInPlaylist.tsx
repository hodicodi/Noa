import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SongOverviewProps } from "@shared/src/types/song.types.ts";
import { FC } from "react";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import style from "./songInPlaylist.style.ts";

const SongInPlaylist: FC<SongOverviewProps> = ({
  name,
  artistName,
  uuid
}) => {

    const{setCurrentSong} = useGlobalDrawer();

    const songInPlaylistClick = () => {
      setCurrentSong({uuid, name, artistName})
  };

  {
    return (
      <Box sx={style.box} onClick ={songInPlaylistClick}>
        <Typography sx={style.playlistName} variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          sx={style.playlistName}
          variant="body2"
          component="div"
        >
          {artistName}
        </Typography>
      </Box>
    );
  }
};

export default SongInPlaylist;
