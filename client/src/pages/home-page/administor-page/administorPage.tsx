import { Box, Typography } from "@mui/material";
import { FC } from "react";
import AdministorAction from "../../../components/administor-action/AdministorAction.tsx";
import NavBar from "../../../components/nav-bar/navBar.tsx";
import Styles from "./administorPage.styles.ts";
import utils from "./administorPage.utils.ts";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../../routes/path.constants.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AdministorPage: FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(HOME_PATH);
  };
  return (
    <>
      <NavBar />
      <ArrowBackIcon sx={Styles.backIcon} onClick={handleBackClick} />
      <Box sx={Styles.administorPage}>
        <Typography variant="h3" sx={Styles.title}>
          Administor actions
        </Typography>
        <AdministorAction {...utils.manageUsers} />
        <AdministorAction {...utils.manageAlbums} />
        <AdministorAction {...utils.manageSongs} />
      </Box>
    </>
  );
};

export default AdministorPage;
