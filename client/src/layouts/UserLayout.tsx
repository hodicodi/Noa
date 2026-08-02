import { FC } from "react";
import { Outlet } from "react-router-dom";
import DrawerAndSongPlayer from "../components/DrawerAndSongPlayer/DrawerAndSongPlayer.tsx";
import { useGlobalDrawer } from "../components/song-drawer/DrawerContext.tsx";

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
