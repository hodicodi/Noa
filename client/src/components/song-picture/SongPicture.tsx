import { Box, Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlaylistOverviewProps } from "@shared/playlistProps.ts";
import Styles from "./songPicture.style.ts";
import { FC } from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const SongPicture: FC<PlaylistOverviewProps> = ({ name, avaterPicture, artist }) => (
  <Box sx={Styles.songMainPreview}>
    <Box sx={Styles.imgContainer}>
      <Box sx={Styles.songImg} component="img" src={avaterPicture} />
    </Box>
    <Box sx={Styles.songInfoContainer} />
    <Card sx={Styles.card}>
      <Box>
          {/* <Grid size={10.5}> */}
            <CardContent sx={Styles.cardContent}>
              <Box>
                <Typography sx={Styles.songName} variant="h6" component="div">
                  {"song name"}
                </Typography>
                <Typography sx={Styles.artistName} variant="body2" component="div">
                  {"artist"}
                </Typography>
              </Box>
              <IconButton sx={Styles.plusIcon} style={{ marginLeft: "auto" }} color="inherit" aria-label="your action">
                <ControlPointIcon fontSize="large" />
              </IconButton>
            </CardContent>
          {/* </Grid> */}
      </Box>
    </Card>
    <Box />
  </Box>
);

export default SongPicture;
