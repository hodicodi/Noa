import { Box, CircularProgress } from "@mui/material";
import { AuthStatus } from "@shared/Enums.ts";
import { FC } from "react";
import App from "./App.tsx";
import { useAuth } from "./auth/AuthContext.tsx";
import { LoginPage } from "./auth/LoginPage.tsx";
import AlertDialog from "./components/custom-dialog/customDialog.tsx";
import { useUserByTz } from "./hooks/useUserByTz.ts";
import style from "./layouts/rootLayout.style.ts";

const Shell: FC = () => {
  const { status, user, changeUser } = useAuth();
  if (status === AuthStatus.Loading)
    return (
      <Box sx={style.loading}>
        <CircularProgress />
      </Box>
    );
  if (status === AuthStatus.Unauthenticated) return <LoginPage />;

  const { data: systemUserRes } = useUserByTz();

  if (!systemUserRes?.uuid) {
    return (
      <>
        <AlertDialog title="We cannot let you in" description="user doesn't exist in system" /> <LoginPage />
      </>
    );
  }
  
  changeUser(systemUserRes!);
  return <App />;
};

export default Shell;
