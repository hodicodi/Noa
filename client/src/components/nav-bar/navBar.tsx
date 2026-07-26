import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Box, Button, Menu, MenuItem, Typography, createTheme } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext.tsx";
import { ADMINISTOR_PATH } from "../../routes/path.constants.ts";
import Styles from "./navBar.style.ts";

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
    navigate(ADMINISTOR_PATH);
  };

  const signoutClick = () => {
    handleClose();
    logout();
  };

  return (
    <Box sx={Styles.userBar}>
      <Button sx={Styles.supervisor} onClick={handleClick}><SupervisorAccountIcon/></Button>
      <Typography sx={Styles.userName} onClick={handleClick}>{user?.name ?? user?.email}</Typography>
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
