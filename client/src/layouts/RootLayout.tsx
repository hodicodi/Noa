import {
  Box,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.tsx";
import style from "./rootLayout.style.ts";
import SongDrawer from "../components/song-drawer/songDrawer.tsx";

const theme = createTheme({ palette: { primary: { main: "#ffffff" } } });

const RootLayout: FC = () => {
  const { status, user, logout } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={style.app}>
        <Box sx={style.backgound}>
          <Outlet />
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default RootLayout;
