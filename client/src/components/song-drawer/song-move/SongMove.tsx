import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { useGlobalDrawer } from '../DrawerContext.tsx';
import Styles from "./songMove.style.ts";

const SongMove: FC = () => {

  const {isplayIconMarked, handleIconClick} = useGlobalDrawer();


  return (
  <>
      <Box sx = {Styles.box}>
          <IconButton sx={Styles.moveIcon}  color="inherit" aria-label="your action">
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleIconClick} sx={Styles.plusIcon} style={{ marginLeft: "auto" }} color="inherit" aria-label="your action">
            {isplayIconMarked ? <PlayArrowIcon fontSize="large" /> : <PauseIcon fontSize="large" />}
          </IconButton>
          <IconButton sx={Styles.moveIcon} style={{ marginLeft: "auto" }} color="inherit" aria-label="your action">
            <SkipNextIcon fontSize="large" />
          </IconButton>
      </Box>
  </>
)};

export default SongMove;
