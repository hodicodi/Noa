import { Box, Typography } from "@mui/material";
import { FC } from "react";
import AdministorAction from "../../../components/administor-action/AdministorAction.tsx";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import Style from "./administorPage.styles.ts";
import Utils from "./administorPage.utils.ts";

const AdministorPage: FC = () => {
  return (
    <>
      <NavBar />
      <Box sx={Style.administorPage}>
        <Typography variant="h3" sx={{ color: "#f8f8f8" }}>
          Administor actions
        </Typography>
        <AdministorAction {...Utils.manageUsers} />
        <AdministorAction {...Utils.manageArtists} />
        <AdministorAction {...Utils.manageSongs} />
      </Box>
    </>
  );
};

export default AdministorPage;
