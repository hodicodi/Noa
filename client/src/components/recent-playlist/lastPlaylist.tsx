import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PlaylistOverviewProps } from "@shared/src/types/personalPlaylist.types.ts";
import style from "./recentPlaylist.style.ts";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { useAlbumImg } from "../../hooks/useAlbumImg.ts";
import { Album } from "@shared/src/types/album.types.ts";

export type AlbumOverviewProps = {
  album: Album;
};

const LastPlaylistCard: FC<AlbumOverviewProps> = ({ album }) => {
  const navigate = useNavigate();

  const suggestedPlaylistClick = () => {
    navigate("/playlist");
  };

  {
    return (
      <Card sx={style.card} onClick={suggestedPlaylistClick}>
        <Box sx={style.box}>
          <Grid container spacing={0}>
            <Grid size={1.9}>
              <CardMedia sx={style.cardMedia} component="img" image={useAlbumImg(album.uuid!).data!} alt="Playlist picture" />
            </Grid>
            <Grid size={10.1}>
              <CardContent sx={style.cardContent}>
                <Typography sx={style.playlistName} gutterBottom variant="body2" component="div">
                  {album.name}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Card>
    );
  }
};

export default LastPlaylistCard;
