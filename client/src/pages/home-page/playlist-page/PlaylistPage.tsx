import { Box } from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import SongsInPlaylist from "../../../components/song-in-playlist/SongsInPlaylist.tsx";
import { useAlbumImg } from "../../../hooks/useAlbumImg.ts";
import Styles from "./playlistPage.style.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HOME_PATH } from "../../../routes/path.constants.ts";

const PlaylistPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { album } = location.state ?? {};
  const { data: albumImg = null } = useAlbumImg(album.uuid!);
  const artistName = album.artist.name ?? "";
  const playlistName = album.name;

  const handleBackClick = () => {
    navigate(HOME_PATH);
  };
  return (
    <Box sx={Styles.playlistPage}>
      <ArrowBackIcon sx={Styles.backIcon} onClick={handleBackClick} />
      <Box sx={Styles.playlistPicture}>
        <PlaylistPicture name={playlistName} avaterPicture={albumImg!} artistName={artistName} />
      </Box>
      <SongsInPlaylist />
    </Box>
  );
};

export default PlaylistPage;
