import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Drawer } from "@mui/material";
import { playlistInfo } from "@shared/hardCodedInfo.ts";
import { FC } from "react";
import SongInfo from "./song-Info/SongInfo.tsx";
import SongMove from "./song-move/SongMove.tsx";
import SongPicture from "./song-picture/SongPicture.tsx";
import { useGlobalDrawer } from "./DrawerContext.tsx";
import Styles from "./songDrawer.style.ts";
import { SongDrawerOverviewProps } from "./SongDrawerOverviewProps.ts";

export const SongDrawer: FC<SongDrawerOverviewProps> = ({ isDrawerOpen, ToggleDrawer, handleIconClick, isPlay }) => {
  const { currentSong } = useGlobalDrawer();

  return (
    <Drawer sx={Styles.songDrawer} anchor="bottom" open={isDrawerOpen} onClose={ToggleDrawer}>
      <Box role="presentation">
        <ArrowBackIcon sx={Styles.backIcon} onClick={() => ToggleDrawer()} />
        <Box sx={Styles.songDrawerPage}>
          <SongPicture uuid={currentSong.uuid!} name={currentSong.name!} avaterPicture={playlistInfo[0]!.avaterPicture} artistName={currentSong.artistName!} />
          <Box sx={Styles.songMainPreview}>
            <SongInfo uuid={currentSong.uuid!} name={currentSong.name!} avaterPicture={playlistInfo[0]!.avaterPicture} artistName={currentSong.artistName!} />
            <SongMove isPlay={isPlay} handleIconClick={handleIconClick}/>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
