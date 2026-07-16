import { Box, Typography } from "@mui/material";
import Styles from "../edit-user-page/editUser.style.ts"
import { AdministorActionsProps } from "@shared/src/types/administor.types.ts";
import { FC } from "react";
import AdministorAction from "../../../components/administor-action/AdministorAction.tsx";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import EditUserForm from "../../../components/add-user-form/AddUserForm.tsx";

const AdministorPage: FC = () => {
  const manageUsers:AdministorActionsProps = {
    name: "Handle users",
    path: "/handleUsers"
  } 
    const manageArtists:AdministorActionsProps = {
    name: "Handle artists",
    path: "/handleArtists"
  } 
    const manageSongs:AdministorActionsProps = {
    name: "Handle songs",
    path: "/handleSongs"
  } 

  return (
    <>
      <NavBar />
      <Box sx={Styles.handleEditUserPage}>
        <Typography variant="h3" sx={{ color: "#f8f8f8" }}>
          Add user
        </Typography>
        <EditUserForm/>
      </Box>
    </>
  );
};

export default AdministorPage;
