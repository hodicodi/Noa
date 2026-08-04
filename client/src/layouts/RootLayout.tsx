import { FC } from "react";
import { Outlet } from "react-router-dom";
import DrawerAndSongPlayer from "../components/drawer-and-song-player/DrawerAndSongPlayer.tsx";
import { DrawerProvider } from "../components/song-drawer/DrawerContext.tsx";

const RootLayout: FC = () => (
  <DrawerProvider>
    <Outlet />
    <DrawerAndSongPlayer />
  </DrawerProvider>
);

export default RootLayout;
