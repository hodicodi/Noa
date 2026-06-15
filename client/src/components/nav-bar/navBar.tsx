import { Box, Button, Typography, createTheme } from "@mui/material";
import Styles from './navBar.style';
import {FC} from 'react';
import { useAuth } from "../../auth/AuthContext";

const theme = createTheme({ palette: { primary: { main: "#ffffff" } } });

const NavBar: FC = () => {
  const { status, user, logout } = useAuth();

  return (
    <Box sx={Styles.userBar}>
      <Typography color="primary">{user?.name ?? user?.email}</Typography>
      <Button variant="outlined" onClick={logout}>
        Sign out
      </Button>
    </Box>
  );
};

export default NavBar;
