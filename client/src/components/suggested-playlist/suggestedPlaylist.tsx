import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAlbumImg } from "../../hooks/useAlbumImg.ts";
import { PLAYLIST_PATH } from "../../routes/path.constants.ts";
import style from "./suggestedPlaylist.style.ts";
import { AlbumOverviewProps } from "../recent-playlist/lastPlaylist.consts.ts";

const PlaylistCard: FC<AlbumOverviewProps> = ({ album }) => {
  const navigate = useNavigate();

  const suggestedPlaylistClick = () => {
    navigate(PLAYLIST_PATH, {
      state: { album },
    });
  };

  return (
    <Card sx={style.card} onClick={suggestedPlaylistClick}>
      <CardContent sx={style.cardContent}>
        <Typography sx={style.playlistName} variant="h6">
          {album.name}
        </Typography>
      </CardContent>
      <CardMedia component="img" image={useAlbumImg(album.uuid!).data!} />
    </Card>
  );
};

export default PlaylistCard;
