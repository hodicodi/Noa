import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AppBar, Box, ButtonBase, Card, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import Styles from "./songPlaying.style.ts";
import PauseIcon from "@mui/icons-material/Pause";
import { usemp3, useSong } from "../../hooks/useSong.ts";

const SongPlaying: FC = () => {
  const { isOpen, ToggleDrawer, isplayIconMarked, handleIconClick, currentSong, RecievedaudioUrl } = useGlobalDrawer();
  /*
  console.log(currentSong.uuid);
  const { data: song, isLoading } = useSong(currentSong.uuid);
  const { data: audioUrl } = usemp3(song?.uuid!);
  console.log("mp3Buffer:" + audioUrl);
  const audio = new Audio(audioUrl!);
  audio.onended = () => {
    URL.revokeObjectURL(audioUrl!);
  };
      audio.play().catch(error => {
      console.error("Playback failed", error);
    });
*/
  const avatarImage = "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F890d5a9fbbe79b45c3cee4d7b086accd.1000x563x1.jpg";

 const temp = (): void => {
      const audio = new Audio(RecievedaudioUrl!);
      audio.play();
    
  };
  return (
    <>
      <ButtonBase component={AppBar} onClick={ToggleDrawer}>
        <AppBar position="fixed" sx={Styles.songPlaying}>
          <Toolbar>
            <Card sx={Styles.card}>
              <Box sx={Styles.box}>
                <Grid container spacing={0}>
                  <Grid size={0.8}>
                    <CardMedia sx={Styles.cardMedia} component="img" image={avatarImage} alt="Beautiful Sunrise" />
                  </Grid>
                  <Grid size={10.5}>
                    <CardContent sx={Styles.cardContent}>
                      <Box>
                        <Typography sx={Styles.playlistName} variant="body2" component="div">
                          {currentSong.name}
                        </Typography>
                        <Typography sx={Styles.artistName} variant="body2" component="div">
                          {currentSong.artistName}
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={(e) => {
                          temp();
                          e.stopPropagation();
                        }}
                        sx={Styles.playIcon}
                        color="inherit"
                        aria-label="your action"
                      >
                        {isplayIconMarked ? <PlayArrowIcon fontSize="large" /> : <PauseIcon fontSize="large" />}
                      </IconButton>
                    </CardContent>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Toolbar>
        </AppBar>
      </ButtonBase>
      <Toolbar />
    </>
  );
};

export default SongPlaying;
