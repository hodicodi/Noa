import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { DrawerInfoProps } from "../../DrawerAndSongPlayer/DrawerAndSongPlayer.tsx";
import Styles from "./songMove.style.ts";
import { useGlobalDrawer } from "../DrawerContext.tsx";
import { Album } from "@shared/src/types/album.types.ts";
import { Song } from "@shared/src/types/song.types.ts";

type SongMoveProps = Partial<DrawerInfoProps>;

const SongMove: FC<SongMoveProps> = ({ isPlay, handleIconClick }) => {
  const { currentAlbum, currentSong, setCurrentSong } = useGlobalDrawer();

  const getNextSongInAlbum = (album: Album, song: Song) => {
    const indexSongInAlbum = album.songs?.indexOf(song);
    const indexNextSongInAlbum = (indexSongInAlbum! + 1) % album.songs?.length!;
    setCurrentSong(album.songs![indexNextSongInAlbum]!);
  };

    const getPreviousSongInAlbum = (album: Album, song: Song) => {
    const indexSongInAlbum = album.songs?.indexOf(song);
    const indexPreviousSongInAlbum = indexSongInAlbum === 0 ? album.songs?.length! - 1 : indexSongInAlbum! - 1;
    setCurrentSong(album.songs![indexPreviousSongInAlbum]!);
  };

  return (
    <Box sx={Styles.box}>
      <IconButton onClick={() => getPreviousSongInAlbum(currentAlbum!, currentSong!)} sx={Styles.moveIcon} color="inherit" aria-label="your action">
        <SkipPreviousIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handleIconClick} sx={Styles.playIcon} color="inherit" aria-label="your action">
        {isPlay ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
      </IconButton>
      <IconButton onClick={() => getNextSongInAlbum(currentAlbum!, currentSong!)} sx={Styles.moveIcon} color="inherit" aria-label="your action">
        <SkipNextIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SongMove;
