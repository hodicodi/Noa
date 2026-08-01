import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Drawer } from "@mui/material";
import { FC } from "react";
import SongInfo from "./song-Info/SongInfo.tsx";
import SongMove from "./song-move/SongMove.tsx";
import SongPicture from "./song-picture/SongPicture.tsx";
import Styles from "./songDrawer.style.ts";
import { SongDrawerOverviewProps } from "./SongDrawerOverviewProps.ts";

export const SongDrawer: FC<SongDrawerOverviewProps> = ({ isDrawerOpen, toggleDrawer, handleIconClick, isPlay }) => (
  <Drawer sx={Styles.songDrawer} anchor="bottom" open={isDrawerOpen} onClose={toggleDrawer}>
    <Box role="presentation">
      <ArrowBackIcon sx={Styles.backIcon} onClick={toggleDrawer} />
      <Box sx={Styles.songDrawerPage}>
        <SongPicture />
        <Box sx={Styles.songMainPreview}>
          <SongInfo />
          <SongMove isPlay={isPlay} handleIconClick={handleIconClick} />
        </Box>
      </Box>
    </Box>
  </Drawer>
);
