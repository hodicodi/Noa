import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";
import { useAuth } from "../../auth/AuthContext.tsx";
import Styles from "./navBar.style.ts"

const NavBar: FC = () => {
  const { status, user, logout } = useAuth();

  return (
    <Box sx={Styles.navBar}>
      <Typography color="primary">{user?.name ?? user?.email}</Typography>
      <Button variant="outlined" onClick={logout}>
        Sign out
      </Button>
    </Box>
  );
};

export default NavBar;
