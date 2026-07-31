import { Box } from "@mui/material";
import { playlistInfo } from "@shared/hardCodedInfo.ts";
import { FC } from "react";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import SongsInPlaylist from "../../../components/song-in-playlist/SongsInPlaylist.tsx";
import Styles from "./playlistPage.style.ts";
import { useLocation } from "react-router-dom";
import { useAlbumImg } from "../../../hooks/useAlbumImg.ts";

const PlaylistPage: FC = () => {
  const location = useLocation();

  const playlistPageProps = location.state || {};

  return (
    <Box sx={Styles.playlistPage}>
      <PlaylistPicture
        name={playlistPageProps.album.name}
        avaterPicture={useAlbumImg(playlistPageProps.album.uuid!).data!}
        artist={playlistPageProps.album.artist.name ?? ""}
      />
      <SongsInPlaylist />
    </Box>
  );
};

export default PlaylistPage;
