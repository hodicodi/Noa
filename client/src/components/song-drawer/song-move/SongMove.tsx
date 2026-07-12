import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { DrawerInfoProps } from "../../DrawerAndSongPlayer/DrawerAndSongPlayer.tsx";
import Styles from "./songMove.style.ts";

type SongMoveProps = Partial<DrawerInfoProps>;

const SongMove: FC<SongMoveProps> = ({isPlay, handleIconClick}) => {

  return (
    <Box sx={Styles.box}>
      <IconButton sx={Styles.moveIcon} color="inherit" aria-label="your action">
        <SkipPreviousIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handleIconClick} sx={Styles.playIcon} color="inherit" aria-label="your action">
        {isPlay ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
      </IconButton>
      <IconButton sx={Styles.moveIcon} color="inherit" aria-label="your action">
        <SkipNextIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SongMove;
