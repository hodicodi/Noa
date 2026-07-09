import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AppBar, Box, ButtonBase, Card, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import Styles from "./songPlaying.style.ts";
import { DrawerInfoProps } from "../DrawerAndSongPlayer/DrawerAndSongPlayer.tsx";

const SongPlaying: FC<DrawerInfoProps> = ({ isPlay, ToggleDrawer, handleIconClick}) => {
  const { currentSong, recievedaudioUrl } = useGlobalDrawer();

  const avatarImage = "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F890d5a9fbbe79b45c3cee4d7b086accd.1000x563x1.jpg";


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
                          handleIconClick();
                          e.stopPropagation();
                        }}
                        sx={Styles.playIcon}
                        color="inherit"
                        aria-label="your action"
                      >
                        {isPlay ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
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
