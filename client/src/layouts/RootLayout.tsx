import {
  Box,
  Button,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import style from "./rootLayout.style"
import { useAuth } from "../auth/AuthContext";

const theme = createTheme({ palette: { primary: { main: "#ffffff" } } });

const RootLayout: FC = () => {
  const { status, user, logout } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={style.app}>
        <Box sx={style.backgound}>
          <Box sx={style.appContent}>
            <Outlet />
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default RootLayout;
