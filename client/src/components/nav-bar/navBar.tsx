import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext.tsx";
import { ADMINISTOR_PATH } from "../../routes/path.constants.ts";
import Styles from "./navBar.style.ts";

const NavBar: FC = () => {
  const { logout, user} = useAuth();
  const navigate = useNavigate();
  const { user, authUser } = useAuth();

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

  const name = useUserByTz().data?.name;

  return (
    <Box sx={Styles.userBar}>
      <Button sx={Styles.supervisor} onClick={handleClick}>
        <SupervisorAccountIcon />
      </Button>
      <Typography sx={Styles.userName}>{user!.name}</Typography>
      <Menu sx={Styles.dropdown} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem sx={Styles.menuItem} onClick={signoutClick}>
          Sign out
        </MenuItem>
        <MenuItem sx={Styles.menuItem} onClick={administorClick}>
          Administor
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavBar;
