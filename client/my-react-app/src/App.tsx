import {
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useAuth } from "./auth/AuthContext";
import { LoginPage } from "./auth/LoginPage";
import MediaCard from "./components/lastPlaylistCard";
import RowAndColumnSpacing from "./features/lastPlaylists";

const theme = createTheme({ palette: { primary: { main: "#1976d2" } } });

function Shell() {
  const { status, user, logout } = useAuth();
  if (status === "loading")
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  if (status === "unauthenticated") return <LoginPage />;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          bgcolor: "white",
        }}
      >
        <Typography>{user?.name ?? user?.email}</Typography>
        <Button variant="outlined" onClick={() => void logout()}>
          Sign out
        </Button>
      </Box>
      <Box sx={{ p: 2 }}>{/* your protected app goes here */
      <>
        <RowAndColumnSpacing></RowAndColumnSpacing>
      </>
        }</Box>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Shell />
    </ThemeProvider>
  );
}