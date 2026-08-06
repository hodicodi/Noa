import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AppBar, Box, ButtonBase, Card, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useAlbumImg } from "../../hooks/useAlbumImg.ts";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import Styles from "./songPlaying.style.ts";
import { DrawerInfoProps } from "../drawer-and-song-player/DrawerAndSongPlayer.tsx";

const SongPlaying: FC<DrawerInfoProps> = ({ isPlay, toggleDrawer, handleIconClick }) => {
  const { currentSong, currentAlbum } = useGlobalDrawer();

  const { data: albumImg = null } = useAlbumImg(currentAlbum!.uuid!);

  return (
    <>
      <ButtonBase component={AppBar} onClick={toggleDrawer}>
        <AppBar position="fixed" sx={Styles.songPlaying}>
          <Toolbar>
            <Card sx={Styles.card}>
              <Box sx={Styles.box}>
                <Grid container spacing={0}>
                  <Grid size={0.8}>
                    <CardMedia sx={Styles.cardMedia} component="img" image={albumImg!} alt="Beautiful Sunrise" />
                  </Grid>
                  <Grid size={10.5}>
                    <CardContent sx={Styles.cardContent}>
                      <Box>
                        <Typography sx={Styles.playlistName} variant="body2" component="div">
                          {currentSong?.name}
                        </Typography>
                        <Typography sx={Styles.artistName} variant="body2" component="div">
                          {currentAlbum?.artist?.name}
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
