import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import SongsInPlaylist from "../../../components/song-in-playlist/SongsInPlaylist.tsx";
import { HOME_PATH } from "../../../routes/path.constants.ts";
import Styles from "./playlistPage.style.ts";

const PlaylistPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { album } = location.state ?? {};


  const handleBackClick = () => {
    navigate(HOME_PATH);
  };
  return (
    <Box sx={Styles.playlistPage}>
      <ArrowBackIcon sx={Styles.backIcon} onClick={handleBackClick} />
      <Box sx={Styles.playlistPicture}>
        <PlaylistPicture album={album} />
      </Box>
      <SongsInPlaylist album={album} />
    </Box>
  );
};

export default PlaylistPage;
