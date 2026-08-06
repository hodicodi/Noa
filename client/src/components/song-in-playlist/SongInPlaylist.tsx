import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Album } from "@shared/src/types/album.types.ts";
import { Song } from "@shared/src/types/song.types.ts";
import { FC } from "react";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import style from "./songInPlaylist.style.ts";

type SongInPlaylistProps = {
  song: Song;
  album: Album;
};

const SongInPlaylist: FC<SongInPlaylistProps> = ({ song, album }) => {
  const { setCurrentSong, setCurrentAlbum, setPlay } = useGlobalDrawer();

  const songInPlaylistClick = () => {
    setCurrentSong(song);
    setCurrentAlbum(album);
    setPlay(true);
  };

  return (
    <Box sx={style.box} onClick={songInPlaylistClick}>
      <Typography sx={style.playlistName} variant="h6" component="div">
        {song?.name}
      </Typography>
      <Typography sx={style.playlistName} variant="body2" component="div">
        {album?.artist?.name}
      </Typography>
    </Box>
  );
};

export default SongInPlaylist;
