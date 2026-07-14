import { Box, Button, Typography, createTheme } from "@mui/material";
import Styles from "./navBar.style.ts";
import { FC } from "react";
import { useAuth } from "../../auth/AuthContext.tsx";
import { MouseEvent, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({ palette: { primary: { main: "#ffffff" } } });

const NavBar: FC = () => {
  const { status, user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const administorClick = () => {
    handleClose();
    navigate("/administor");
  };

  const signoutClick = () => {
    handleClose();
    logout();
  };

  return (
    <Box sx={Styles.userBar}>
      <Button sx={Styles.userName} onClick={handleClick}>{user?.name ?? user?.email}</Button>
      <Menu sx={Styles.dropdown} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem sx={Styles.menuItem} onClick={signoutClick}>Sign out</MenuItem>
        <MenuItem sx={Styles.menuItem} onClick={administorClick}>
          Administor
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavBar;
