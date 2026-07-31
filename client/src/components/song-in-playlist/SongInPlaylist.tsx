import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Song, SongOverviewProps } from "@shared/src/types/song.types.ts";
import { FC } from "react";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import style from "./songInPlaylist.style.ts";

type SongInPlaylistProps = {
  song: Song;
  artistName: string;
};

const SongInPlaylist: FC<SongInPlaylistProps> = ({ song, artistName }) => {
  console.log(song);
  const { setCurrentSong } = useGlobalDrawer();

  const songInPlaylistClick = () => {
    setCurrentSong(song);
  };

  {
    return (
      <Box sx={style.box} onClick={songInPlaylistClick}>
        <Typography sx={style.playlistName} variant="h6" component="div">
          {song.name}
        </Typography>
        <Typography sx={style.playlistName} variant="body2" component="div">
          {artistName}
        </Typography>
      </Box>
    );
  }
};

export default SongInPlaylist;
