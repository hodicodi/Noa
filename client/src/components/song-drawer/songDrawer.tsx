import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useGlobalDrawer } from "./DrawerContext.tsx";
import Styles from "./songDrawer.style.ts"
import PlaylistPicture from "../playlist-picture/PlaylistPicture.tsx";
import { playlistInfo } from "@shared/hardCodedInfo.ts";
import SongDrawerPage from "../../pages/home-page/song-drawer-page/songDrawerPage.tsx";

export const SongDrawer: React.FC = () => {
  const { isOpen, closeDrawer } = useGlobalDrawer();

  return (
    <Drawer sx={Styles.songDrawer} anchor="bottom" open={isOpen} onClose={closeDrawer}>
      <Box role="presentation" onClick={closeDrawer}>
        <SongDrawerPage/>
      </Box>
    </Drawer>
  );
};
