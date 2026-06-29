import { Box, Drawer } from "@mui/material";
import { FC } from "react";
import SongDrawerPage from "../../pages/home-page/song-drawer-page/songDrawerPage.tsx";
import { useGlobalDrawer } from "./DrawerContext.tsx";
import Styles from "./songDrawer.style.ts";
import { SongDrawerOverviewProps } from "./SongDrawerOverviewProps.ts";

export const SongDrawer: FC<SongDrawerOverviewProps> = ({ imageUrl }) => {
  const { isOpen, ToggleDrawer } = useGlobalDrawer();

  return (
    <Drawer sx={Styles.songDrawer} anchor="bottom" open={isOpen} onClose={ToggleDrawer}>
      <Box role="presentation">
        <SongDrawerPage />
      </Box>
    </Drawer>
  );
};
