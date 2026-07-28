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
  const { user, isLoading } = useAuth();
  if (isLoading)
    return (
      <Box sx={style.loading}>
        <CircularProgress />
      </Box>
    );

  if (!user?.uuid) {
    return (
      <>
        <AlertDialog title="We cannot let you in" description="user doesn't exist in system" />
        <LoginPage />
      </>
    );
  }

  return <App />;
};

export default Shell;
