import { Box } from "@mui/material";
import { playlistInfo } from "@shared/hardCodedInfo.ts";
import { FC } from "react";
import SongInfo from "../../../components/song-drawer/song-Info/SongInfo.tsx";
import SongMove from "../../../components/song-drawer/song-move/SongMove.tsx";
import SongPicture from "../../../components/song-drawer/song-picture/SongPicture.tsx";
import Styles from "./songDrawer.style.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGlobalDrawer } from "../../../components/song-drawer/DrawerContext.tsx";

const SongDrawerPage: FC = () => {
  const { isOpen, closeDrawer } = useGlobalDrawer();


  return (
    <>
      <ArrowBackIcon sx={Styles.backIcon}  onClick={() => closeDrawer()}/>
      <Box sx={Styles.songDrawerPage}>
        <SongPicture
          name={playlistInfo?.[0]?.name ?? ""}
          avaterPicture={playlistInfo[0]!.avaterPicture}
          artist={playlistInfo?.[0]?.artist ?? ""}
        />
        <Box sx={Styles.songMainPreview}>
          <SongInfo
            name={playlistInfo?.[0]?.name ?? ""}
            avaterPicture={playlistInfo[0]!.avaterPicture}
            artist={playlistInfo?.[0]?.artist ?? ""}
          />
          <SongMove />
        </Box>
      </Box>
    </>
  );
};

export default SongDrawerPage;
