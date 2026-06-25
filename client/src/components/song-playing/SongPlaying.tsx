import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import Styles from "./songPlaying.style.ts";
import { useGlobalDrawer } from "../song-drawer/DrawerContext.tsx";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const SongDrawer: FC = () => {
  const { isOpen, openDrawer } = useGlobalDrawer();

  const avatarImage = "https://images.unsplash.com/photo-1494548162494-384bba4ab999";

  return (
    <>
      <ButtonBase component={AppBar} onClick={openDrawer}>
        <AppBar position="fixed" sx={Styles.songDrawer}>
          <Toolbar>
            <Card sx={Styles.card}>
              <Box sx={Styles.box}>
                <Grid container spacing={0}>
                  <Grid size={0.8}>
                    <CardMedia sx={Styles.cardMedia} component="img" image={avatarImage} alt="Beautiful Sunrise" />
                  </Grid>
                  <Grid size={10.5}>
                    <CardContent sx={Styles.cardContent}>
                      <Typography sx={Styles.playlistName} variant="body2" component="div">
                        {"song name"}
                        <IconButton style={{ marginLeft: "auto" }} color="inherit" aria-label="your action">
                          <PlayArrowIcon fontSize="large" />
                        </IconButton>
                      </Typography>
                      <Typography sx={Styles.artistName} variant="body2" component="div">
                        {"artist"}
                      </Typography>
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

export default SongDrawer;
