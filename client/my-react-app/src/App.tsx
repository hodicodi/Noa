import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useAuth } from "./auth/AuthContext";
import { LoginPage } from "./auth/LoginPage";
import LastPlaylists from "./features/lastPlaylists";
import SuggestedPlaylists from "./features/suggestedPlaylists";
import HomePage from "./pages/homaPage";


const theme = createTheme({ palette: { primary: { main: "#ffffff" } } });

function Shell() {
  const { status, user, logout } = useAuth();
  if (status === "loading")
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center"}}>
        <CircularProgress />
      </Box>
    );
  if (status === "unauthenticated") return <LoginPage />;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#000000"
        , width: {xs: '100%', sm: '30%'}}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          bgcolor: "#4d0963",
        }}
      >
        <Typography color="primary">{user?.name ?? user?.email}</Typography>
        <Button variant="outlined" onClick={() => void logout()}>
          Sign out
        </Button>
      </Box>
      <Box sx={{ p: 2 }}>{/* your protected app goes here */
      <>
      <HomePage></HomePage>
      </>
        }</Box>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Paper sx = {{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
            <Shell />
        </Paper>
    </ThemeProvider>
  );
}