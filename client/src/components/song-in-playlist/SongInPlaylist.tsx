import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Album } from "@shared/src/types/album.types.ts";

import { Song, SongOverviewProps } from "@shared/src/types/song.types.ts";
import style from "./songInPlaylist.style.ts";
import { useNavigate } from "react-router-dom";
import Path from "../../routes/pathConstants.ts";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";

const SongInPlaylist: React.FC<SongOverviewProps> = ({
  name,
  artistName
}) => {

    const{setCurrentSong} = useGlobalDrawer();

    const songInPlaylistClick = () => {
      setCurrentSong({uuid: "", name: name, artistName: artistName})
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
