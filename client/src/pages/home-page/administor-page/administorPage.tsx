import { Box, Typography } from "@mui/material";
import { FC } from "react";
import AdministorAction from "../../../components/administor-action/AdministorAction.tsx";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import Styles from "./administorPage.styles.ts";
import utils  from "./administorPage.utils.ts"

const AdministorPage: FC = () => {

  return (
    <>
      <NavBar />
      <Box sx={Styles.administorPage}>
        <Typography variant="h3" sx={Styles.title}>
          Administor actions
        </Typography>
        <AdministorAction {...utils.manageUsers}/>
        <AdministorAction {...utils.manageArtists}/>
        <AdministorAction {...utils.manageSongs}/>
      </Box>
    </>
  );
};

export default AdministorPage;
