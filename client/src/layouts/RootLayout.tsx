import { Box, CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.tsx";
import DrawerAndSongPlayer from "../components/DrawerAndSongPlayer/DrawerAndSongPlayer.tsx";
import { DrawerProvider } from "../components/song-drawer/DrawerContext.tsx";
import style from "./rootLayout.style.ts";
const theme = createTheme({ palette: { primary: { main: "#ffffff" } }, typography: { fontFamily: "Georgia"} });

const RootLayout: FC = () => {
  const { status, user, logout } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={style.app}>
        <Box sx={style.backgound}>
          <DrawerProvider>
            <Outlet />
            <DrawerAndSongPlayer />
          </DrawerProvider>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default RootLayout;
