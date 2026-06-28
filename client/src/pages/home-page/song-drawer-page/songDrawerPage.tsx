import { Box } from "@mui/material";
import { playlistInfo } from "@shared/hardCodedInfo.ts";
import { FC } from "react";
import PlaylistPicture from "../../../components/playlist-picture/PlaylistPicture.tsx";
import Styles from "./songDrawer.style.ts";
import SongPicture from "../../../components/song-drawer/song-picture/SongPicture.tsx";
import SongInfo from "../../../components/song-drawer/song-Info/SongInfo.tsx";
import SongMove from "../../../components/song-drawer/song-move/SongMove.tsx";

const SongDrawerPage: FC = () => {
  return (
    <Box sx={Styles.songDrawerPage}>
      <Box sx={Styles.songMainPreview}>
        <SongPicture
          name={playlistInfo?.[0]?.name ?? ""}
          avaterPicture={playlistInfo[0]!.avaterPicture}
          artist={playlistInfo?.[0]?.artist ?? ""}
        />
        <SongInfo
          name={playlistInfo?.[0]?.name ?? ""}
          avaterPicture={playlistInfo[0]!.avaterPicture}
          artist={playlistInfo?.[0]?.artist ?? ""}
        />
        <SongMove/>
      </Box>
    </Box>
  );
};

export default SongDrawerPage;
