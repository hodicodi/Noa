import { Box } from "@mui/material";
import { playlistInfo } from "@shared/hardCodedInfo.ts";
import { FC } from "react";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import Styles from "./songDrawer.style.ts";
import SongPicture from "../../../components/song-picture/SongPicture.tsx";

const SongDrawerPage: FC = () => {
  return (
    <Box sx={Styles.songDrawerPage}>
      <SongPicture
        name={playlistInfo?.[0]?.name ?? ''}
        avaterPicture={playlistInfo[0]!.avaterPicture}
        artist={playlistInfo?.[0]?.artist ?? ''}
      />
    </Box>
  );
};

export default SongDrawerPage;
