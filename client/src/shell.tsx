import {
  Box,
  CircularProgress
} from "@mui/material";
import { AuthStatus } from "@shared/Enums.ts";
import { FC } from "react";
import App from "./App.tsx";
import { useAuth } from "./auth/AuthContext.tsx";
import { LoginPage } from "./auth/LoginPage.tsx";
import style from "./layouts/rootLayout.style.ts";


const Shell: FC = () => {
  const { status, user, logout } = useAuth();
  if (status === AuthStatus.Loading)
    return (
      <Box sx={style.loading}>
        <CircularProgress />
      </Box>
    );
  if (status === AuthStatus.Unauthenticated) return <LoginPage />;

  return (
    <App/>
  )
};


export default Shell;