import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Paper,
  SxProps,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useAuth } from "./auth/AuthContext";
import { LoginPage } from "./auth/LoginPage";
import HomePage from "./pages/home-page/HomaPage";
import style from "./app.style";
import { FC } from "react";
import { AuthStatus } from "../../shared/Enums";

const theme = createTheme({ palette: { primary: { main: "#ffffff" } } });

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
    <Box sx={style.backgound}>
      <Box sx={style.userBar}>
        <Typography color="primary">{user?.name ?? user?.email}</Typography>
        <Button variant="outlined" onClick={logout}>
          Sign out
        </Button>
      </Box>
      <Box sx={style.appContent}>
        <HomePage />
      </Box>
    </Box>
  );
};

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Paper sx={style.app}>
      <Shell />
    </Paper>
  </ThemeProvider>
);

export default App;
