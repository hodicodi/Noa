import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Album } from "@shared/src/types/album.types.ts";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAlbumImg } from "../../hooks/useAlbumImg.ts";
import { PLAYLIST_PATH } from "../../routes/path.constants.ts";
import style from "./suggestedPlaylist.style.ts";

export type AlbumOverviewProps = {
  album: Album;
};

const PlaylistCard: FC<AlbumOverviewProps> = ({ album }) => {
  const navigate = useNavigate();

  const suggestedPlaylistClick = () => {
    navigate(PLAYLIST_PATH, {
      state: { album: album },
    });
  };

  return (
    <Card sx={style.card} onClick={suggestedPlaylistClick}>
      <CardMedia component="img" image={useAlbumImg(album.uuid!).data!} />
        <Typography sx={style.playlistName} variant="body2">
          {album.name}
        </Typography>
    </Card>
  );
};

export default PlaylistCard;
