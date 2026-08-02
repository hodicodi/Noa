import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.tsx";
import DrawerAndSongPlayer from "../components/DrawerAndSongPlayer/DrawerAndSongPlayer.tsx";
import { DrawerProvider } from "../components/song-drawer/DrawerContext.tsx";

const RootLayout: FC = () => {
  const { user, logout } = useAuth();

  return (
    <DrawerProvider>
      <Outlet />
      <DrawerAndSongPlayer />
    </DrawerProvider>
  );
};

export default RootLayout;
