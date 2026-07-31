import { Box } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import SongsInPlaylist from "../../../components/song-in-playlist/SongsInPlaylist.tsx";
import { useAlbumImg } from "../../../hooks/useAlbumImg.ts";
import Styles from "./playlistPage.style.ts";

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
      <SongsInPlaylist album={playlistPageProps.album}/>
    </Box>
  );
};

export default PlaylistPage;
