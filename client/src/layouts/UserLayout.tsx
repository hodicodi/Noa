import { FC } from "react";
import { DrawerProvider, useGlobalDrawer } from "../components/song-drawer/DrawerContext.tsx";
import { Outlet } from "react-router-dom";
import DrawerAndSongPlayer from "../components/DrawerAndSongPlayer/DrawerAndSongPlayer.tsx";

const UserLayout: FC = () => {
const {currentSong, currentAlbum} = useGlobalDrawer()

  return (
    <DrawerProvider>
      <Outlet />
      {currentSong&&currentAlbum&&<DrawerAndSongPlayer />}
    </DrawerProvider>
  );
};

export default UserLayout;