import {
    Box,
    CircularProgress
} from "@mui/material";
import { FC } from "react";
import { AuthStatus } from "../../shared/Enums";
import { useAuth } from "./auth/AuthContext";
import { LoginPage } from "./auth/LoginPage";
import style from "./layouts/rootLayout.style";


const Shell: FC = () => {
  const { status, user, logout } = useAuth();
  if (status === AuthStatus.Loading)
    return (
      <Box sx={style.loading}>
        <CircularProgress />
      </Box>
    );
  if (status === AuthStatus.Unauthenticated) return <LoginPage />;
};


export default Shell;