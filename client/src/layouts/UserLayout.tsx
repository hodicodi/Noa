import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalDrawer } from "../components/song-drawer/DrawerContext.tsx";
import DrawerAndSongPlayer from "../components/drawer-and-song-player/DrawerAndSongPlayer.tsx";

const UserLayout: FC = () => {
  const { currentSong, currentAlbum } = useGlobalDrawer();

  return (
    <>
      <Outlet />
      {currentSong && currentAlbum && <DrawerAndSongPlayer />}
    </>
  );
};

export default UserLayout;
