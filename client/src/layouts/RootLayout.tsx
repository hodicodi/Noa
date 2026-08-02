import { Box, CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.tsx";
import DrawerAndSongPlayer from "../components/drawer-and-song-player/DrawerAndSongPlayer.tsx";
import { DrawerProvider } from "../components/song-drawer/DrawerContext.tsx";
import style from "./rootLayout.style.ts";
const theme = createTheme({ palette: { primary: { main: "#ffffff" } }, typography: { fontFamily: "Georgia"} });

const RootLayout: FC = () => {
  const {  user, logout } = useAuth();

  return (

          <DrawerProvider>
            <Outlet />
            <DrawerAndSongPlayer />
          </DrawerProvider>
  );
};

export default RootLayout;
