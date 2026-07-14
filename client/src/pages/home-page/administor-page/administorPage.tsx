import { Box, Typography } from "@mui/material";
import Style from "./administorPage.styles.ts";
import { playlistInfo } from "@shared/hardCodedInfo.ts";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import SongsInPlaylist from "../../../components/song-in-playlist/SongsInPlaylist.tsx";
import AdministorAction from "../../../components/administor-action/AdministorAction.tsx";
import NavBar from "../../../components/nav-bar/NavBar.tsx";
import {AdministorActionsProps} from "@shared/src/types/administor.types.ts"
import { FC } from "react";

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
      <Box sx={Style.administorPage}>
        <Typography variant="h3" sx={{ color: "#f8f8f8" }}>
          Administor actions
        </Typography>
        <AdministorAction {...manageUsers}/>
        <AdministorAction {...manageArtists}/>
        <AdministorAction {...manageSongs}/>
      </Box>
    </>
  );
};

export default AdministorPage;
