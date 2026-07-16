import { Box, CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.tsx";
import Styles from "./administorLayout.style.ts";
const theme = createTheme({ palette: { primary: { main: "#ffffff" } }, typography: { fontFamily: "Georgia" } });

const AdministorLayout: FC = () => {
  const { status, user, logout } = useAuth();

  return <Outlet />;
};

export default AdministorLayout;
