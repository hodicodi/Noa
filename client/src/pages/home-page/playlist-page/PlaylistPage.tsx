import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import playlistInfo from "../../../../../shared/hardCodedInfo";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture";
import SongsInPlaylist from "../../../components/song-in-playlist/SongsInPlaylist";
import Styles from "./playlistPage.style";


const PlaylistPage: FC = () => {
  return (
    <Box sx={Styles.playlistPage}>
            <PlaylistPicture
            name={playlistInfo[0].name}
            avaterPicture={playlistInfo[0].avaterPicture}
            artist={playlistInfo[0].artist}
            />
            <SongsInPlaylist/>
    </Box>
  );
};

export default PlaylistPage;
