import { Box } from "@mui/material";
import { playlistInfo, songsInfo } from "@shared/hardCodedInfo.ts";
import { FC } from "react";
import SongInfo from "../../../components/song-drawer/song-Info/SongInfo.tsx";
import SongMove from "../../../components/song-drawer/song-move/SongMove.tsx";
import SongPicture from "../../../components/song-drawer/song-picture/SongPicture.tsx";
import Styles from "./songDrawer.style.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGlobalDrawer } from "../../../components/song-drawer/DrawerContext.tsx";

const SongDrawerPage: FC = () => {
  const { isOpen, ToggleDrawer, currentSong } = useGlobalDrawer();


  return (
    <>
      <ArrowBackIcon sx={Styles.backIcon}  onClick={() => ToggleDrawer()}/>
      <Box sx={Styles.songDrawerPage}>
        <SongPicture
          uuid={currentSong.uuid!}
          name={currentSong.name!}
          avaterPicture={playlistInfo[0]!.avaterPicture}
          artistName={currentSong.artistName!}
        />
        <Box sx={Styles.songMainPreview}>
          <SongInfo
            uuid={currentSong.uuid!}
            name={currentSong.name!}
            avaterPicture={playlistInfo[0]!.avaterPicture}
            artistName={currentSong.artistName!}
          />
          <SongMove />
        </Box>
      </Box>
    </>
  );
};

export default SongDrawerPage;
