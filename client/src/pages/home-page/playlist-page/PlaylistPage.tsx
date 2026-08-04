import { Box } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import SongsInPlaylist from "../../../components/song-in-playlist/SongsInPlaylist.tsx";
import { useAlbumImg } from "../../../hooks/useAlbumImg.ts";
import Styles from "./playlistPage.style.ts";

const PlaylistPage: FC = () => {
  const location = useLocation();
  const playlistPageProps = location.state ?? {};
  const albumImg = useAlbumImg(playlistPageProps.album.uuid!).data!;
  const artistName = playlistPageProps.album.artist.name ?? "";
  const playlistName = playlistPageProps.album.name;

  return (
    <Box sx={Styles.playlistPage}>
      <PlaylistPicture name={playlistName} avaterPicture={albumImg} artistName={artistName} />
      <SongsInPlaylist />
    </Box>
  );
};

export default PlaylistPage;
